/**
 * Created by scheinin on 10/11/18.
 */
myApp.directive('appNav', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: './directives/app-nav/view.html',
        link: function (scope, element, attrs, ctrl) {
        },
        controller: function ($scope) {
            $scope.sections = [
                {
                    "name": "New England Patriots",
                    "type": "parent",
                    "icon": "group",
                    "isActive": true,
                    "pages": [
                        {
                            "name": "Tom Brady",
                            "type": "child",
                            "state": "tom-brady",
                            "isActive": true
                        },
                        {
                            "name": "Julian Edelman",
                            "type": "child",
                            "state": "julian-edelman",
                            "isActive": true
                        }
                    ]
                },
                {
                    "name": "Green Bay Packers",
                    "type": "parent",
                    "icon": "group",
                    "isActive": true,
                    "pages": [
                        {
                            "name": "Aaron Rodgers",
                            "type": "child",
                            "state": "aaron-rodgers",
                            "isActive": true
                        },
                        {
                            "name": "Clay Matthews III",
                            "type": "child",
                            "state": "clay-matthews-iii",
                            "isActive": true
                        }
                    ]
                }
            ];
        }
    };
});