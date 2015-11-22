/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var drapp = angular.module("denomradioapp", []);
drapp.controller("hidercontroller", function ($scope) {
    $scope.denomradio = "";
    $scope.yesdenom = true;
    $scope.nodenom = false;
    $scope.maybedenom=false;
    $scope.$watch('denomradio', function (n, o) {
        if (n) {
            $scope.yesdenom=true;
            $scope.nodenom = false;
            $scope.maybedenom=false;
        }
    });
    $scope.submitaction = function () {
        if (!$scope.denomradio) {
            $scope.yesdenom=true;
            $scope.nodenom = false;
            $scope.maybedenom=false;
        } else {
            $scope.yesdenom=true;
            $scope.nodenom = false;
            $scope.maybedenom=false;
        }

    }
})