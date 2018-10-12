/**
 * Created by scheinin on 10/11/18.
 */

'use strict';

var myApp, modules;
modules = ['ngAnimate', 'ui.router', 'ngMaterial', 'ngAria'];

myApp = angular.module('myApp', modules);

myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: '/',
            template: '<h1>Football team</h1>'
        })

        // New England Patriots *************************************

        .state('tom-brady', {
            url: '/new-england-patriots/tom-brady',
            template: '<h1>Tom Brady</h1>'
        })

        .state('julian-edelman', {
            url: '/new-england-patriots/julian-edelman',
            template: '<h1>Julian Edelman</h1>'
        })

        // Green Bay Packers ************************************

        .state('aaron-rodgers', {
            url: '/green-bay-packers/aaron-rodgers',
            template: '<h1>Aaron Rodgers</h1>'
        })

        .state('clay-matthews-iii', {
            url: '/green-bay-packers/clay-matthews-iii',
            template: '<h1>Clay Matthews III</h1>'
        });
}]);