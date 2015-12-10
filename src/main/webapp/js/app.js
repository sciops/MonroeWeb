'use strict';
var App = angular.module('myApp',[]);

(function (angular) {
    'use strict';
    angular.module('ngRouteExample', ['ngRoute'])
            .controller('MainController', function ($scope, $route, $routeParams, $location) {
                $scope.$route = $route;
                $scope.$location = $location;
                $scope.$routeParams = $routeParams;
            })
            .controller('homeController', function ($scope, $routeParams) {
                var vm = this;
                vm.message = 'Welcome to the home page!';
                $scope.name = "homeController";
                $scope.params = $routeParams;
            })
            .controller('saleController', function ($scope, $routeParams) {
                var vm = this;
                vm.message = 'This is the sale page!';
                $scope.name = "saleController";
                $scope.params = $routeParams;
            })
            .controller('servicesController', function ($scope, $routeParams) {
                $scope.message = 'Look! I am an about page.';
                $scope.name = "servicesController";
                $scope.params = $routeParams;
            })
            .controller('aboutController', function ($scope, $routeParams) {
                $scope.message = 'Look! I am an about page.';
                $scope.name = "aboutController";
                $scope.params = $routeParams;
            })
            .controller('contactController', function ($scope, $routeParams) {
                $scope.message = 'Look! I am an about page.';
                $scope.name = "contactController";
                $scope.params = $routeParams;
            })
            .controller('inputController', function ($scope, $routeParams) {
                $scope.message = 'Please click Submit above.';
                $scope.name = "inputController";
                $scope.params = $routeParams;
                $scope.denomradio = 'yesdenom';
                $scope.isShown = function (denomradio) {
                    return (denomradio === $scope.denomradio);
                };
                $scope.submit = function () {
                    $scope.message = 'SUBMITTED!';
                    //code here to actually submit the boxkey JSON somewhere
                }
            })
            .config(function ($routeProvider, $locationProvider) {
                $routeProvider
                        .when('/home', {
                            templateUrl: 'views/pages/home.html',
                            controller: 'homeController',
                            controllerAs: 'home'
                        })
                        .when('/', {
                            templateUrl: 'index.html',
                            controller: 'mainController'
                        })
                        .when('/sale', {
                            templateUrl: 'pages/sale.html',
                            controller: 'saleController',
                            controllerAs: 'sale'
                        })
                        .when('/services', {
                            templateUrl: 'pages/services.html',
                            controller: 'servicesController'
                        })
                        .when('/about', {
                            templateUrl: 'pages/about.html',
                            controller: 'aboutController'
                        })
                        .when('/contact', {
                            templateUrl: 'pages/contact.html',
                            controller: 'contactController'
                        })
                        .when('/input', {
                            templateUrl: 'pages/input.html',
                            controller: 'inputController'
                        });
                // configure html5 to get links working on jsfiddle
                $locationProvider.html5Mode({enabled: true});
            });
})(window.angular);

/*
 var app = angular.module('denomradioapp', []);
 app.controller('denomradioctrl', function($scope) {
 $scope.denomradio = "yes";
 });
 */

/*
// http://stackoverflow.com/q/21400456/949476
// http://plnkr.co/edit/yU6Oj36u9xSJdLwKJLTZ?p=preview
var drapp = angular.module('inputapp', []);
drapp.controller('inputform', function ($scope) {
    $scope.denomradio = 'yesdenom';
    $scope.isShown = function (denomradio) {
        return (denomradio === $scope.denomradio);
    };
});
*/
