angular.module('descViewApp', []);

angular.module('descViewApp')
.directive('descView', function () {
    return {
        templateUrl:"descView/descView.template.html",
        scope: {show:'=', onback:'&', showBack:"="}
    };
});
