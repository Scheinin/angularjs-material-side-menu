/**
 * Created by scheinin on 10/11/18.
 */
myApp.directive('appMenu', function () {
    return {
        restrict: 'E',
        scope: {
            sections: '<',
            opts: '<'
        },
        templateUrl: './directives/app-menu/view.html',
        link: function (scope, element) {
        },
        controller: function ($rootScope, $scope) {
            $scope.opts = typeof $scope.opts !== 'undefined' ? $scope.opts : {};

            $scope.focusSection = function (page) {
                $rootScope.$broadcast('obj:page', page);
            };
        }
    };
});
