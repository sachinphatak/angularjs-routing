angular.module('bikeApp', ['showListApp', 'descViewApp', 'ui.router']);

angular.module('bikeApp')
.controller('bikeParent',['$scope','BikeList', '$rootScope', '$state', function($scope, BikeList, $rootScope, $state) {
    $scope.bikeList = BikeList.bikeList;
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
}])
.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
    .state('root', {
        template: `
            <show-list item-clicked='actionOnClick(item)' bike-list='bikeList'></show-list>
        `,
        url: '/',
        controller: ['$scope', '$state', 'BikeList', function ($scope, $state, BikeList) {
            $scope.actionOnClick = function (clickedItem) {
                $state.go('listDetailView', {url: clickedItem.name});
            };
            $scope.bikeList = BikeList.bikeList;
        }]
    })
    .state('listDetailView', {
        template: `
        <desc-view show='currentBike' onback='onBack()' show-back='true'>
        `,
        url: '/{url:string}',
        resolve: {
            currentBike: ['BikeList', '$stateParams', function (BikeList, $stateParams) {
                for (var i = 0; i < BikeList.bikeList.length; ++i) {
                    if (BikeList.bikeList[i].name === $stateParams.url) {
                        return BikeList.bikeList[i];
                    }
                }
            }]
        },
        controller: ['$scope', 'currentBike', '$state', function ($scope, currentBike, $state) {
            $scope.currentBike = currentBike;
            $scope.onBack = function () {
                $state.go('root');
            };
        }]
    })
}]);

