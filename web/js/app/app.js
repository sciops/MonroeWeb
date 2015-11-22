//Define an angular module for our app

(function (angular) {
    'use strict';
    angular.module('ngRouteExample', ['ngRoute'])
            .controller('MainController', function ($scope, $route, $routeParams, $location) {
                $scope.$route = $route;
                $scope.$location = $location;
                $scope.$routeParams = $routeParams;
            })
            .controller('BookController', function ($scope, $routeParams) {
                $scope.name = "BookController";
                $scope.params = $routeParams;
            })
            .controller('ChapterController', function ($scope, $routeParams) {
                $scope.name = "ChapterController";
                $scope.params = $routeParams;
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
            .config(function ($routeProvider, $locationProvider) {
                $routeProvider
                        .when('/Book/:bookId', {
                            templateUrl: 'book.html',
                            controller: 'BookController',
                            resolve: {
                                // I will cause a 1 second delay
                                delay: function ($q, $timeout) {
                                    var delay = $q.defer();
                                    $timeout(delay.resolve, 1000);
                                    return delay.promise;
                                }
                            }
                        })
                        .when('/Book/:bookId/ch/:chapterId', {
                            templateUrl: 'chapter.html',
                            controller: 'ChapterController'
                        })

                        .when('/home', {
                            templateUrl: 'views/pages/home.html',
                            controller: 'homeController',
                            controllerAs: 'home'
                        })
                        .when('/', {
                            templateUrl: 'home.html',
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

var thumbsUp = element(by.css('span.glyphicon-thumbs-up'));
var thumbsDown = element(by.css('span.glyphicon-thumbs-down'));

it('should check ng-show / ng-hide', function() {
  expect(thumbsUp.isDisplayed()).toBeFalsy();
  expect(thumbsDown.isDisplayed()).toBeTruthy();

  element(by.model('denomradio')).click();

  expect(thumbsUp.isDisplayed()).toBeTruthy();
  expect(thumbsDown.isDisplayed()).toBeFalsy();
});