angular.module("showListApp", []);

angular.module('showListApp')
.directive('showList', function () {
    return {
        restrict: 'E',
        templateUrl: 'showList/showList.template.html',
        scope: {
            bikeList:'=',
            itemClicked:'&'
        }
    };
});
