// Declare angular app
var helloWorldApp = angular.module('helloWorldApp', []);

// Declare angular controller
helloWorldApp.controller('firstController', [
    '$scope',
    function($scope) {
        $scope.appName = 'An App Name';
    }
]);