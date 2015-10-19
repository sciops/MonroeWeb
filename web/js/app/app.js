//Define an angular module for our app

var flowmlApp = angular.module('bulletinApp', ['ngRoute']);

flowmlApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider

                .when('/', {
                    templateUrl: 'pages/home.html',
                    controller: 'mainController'
                })

                .when('/sale', {
                    templateUrl: 'pages/sale.html',
                    controller: 'saleController'
                })
    }])

    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    scotchApp.controller('saleController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });
