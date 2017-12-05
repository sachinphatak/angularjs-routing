angular.module("showListApp", ['ui.router']);

angular.module('showListApp')
.directive('showList', function () {
    return {
        templateUrl:"showList/showList.template.html",
        scope: {bikeList:'=', bikeToShow:'&'}
    };
}) 
.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state("listDetailView", {
        template:"{{description}}",
        url:'/{url:string}',
        controller: 'detailViewController', //register on same module
        resolve: {
            desc: ['BikeList','$stateParams', function (BikeList, $stateParams) {
                BikeList.foreach(function (bike) {
                    console.log(bike.name);
                    if(bike.name === $stateParams.url) 
                        return bike.desc;
                })
            }]
        }
    })
}])
.controller('detailViewController', ['$scope','desc', function($scope, desc) {
    $scope.description = desc;
    console.log(desc);
}]);
