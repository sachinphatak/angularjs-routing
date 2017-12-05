angular.module('bikeApp', ['showListApp','descViewApp','ui.router']);

angular.module('bikeApp')
.controller('bikeParent',['$scope','BikeList', function($scope,BikeList) {
    $scope.showList = true;   
    $scope.item = undefined;
    $scope.bikeList = BikeList.bikeList;
    console.log($scope.bikeList);

    $scope.bikeToShow = function (item) {
        $scope.item = item;
        $scope.showList = !$scope.showList;
    }
    $scope.onBack = function () {
        $scope.showList = !$scope.showList;
    }    
}])
.factory('BikeList',[function () {
    var list = [
        {
            name: 'HONDA',
            desc: 'Honda Motor Co., Ltd. is a Japanese public multinational conglomerate corporation.'
        },
        {
            name: 'YAMAHA',
            desc: "Yamaha is the world's largest piano manufacturing company."
        },
        {
            name: 'SUZUKI',
            desc: 'Suzuki was the ninth biggest automaker by production worldwide.'
        }
    ];
    return {
        bikeList: list
    };
}]);

// .config(['$stateProvider', function ($stateProvider) {
//     $stateProvider.state("listDetailView", {
//         template:"{{description}}",
//         url:'/{url:string}',
//         controller: 'detailViewController', //register on same module
//         resolve: {
//             desc: ['BikeList','$stateParams', function (BikeList, $stateParams) {
//                 BikeList.foreach(function (bike) {
//                     console.log(bike.name);
//                     if(bike.name === $stateParams.url) 
//                         return bike.desc;
//                 })
//             }]
//         }
//     })
// }])
// .controller('detailViewController', ['$scope','desc', function($scope, desc) {
//     $scope.description = desc;
//     console.log(desc);
// }]);


