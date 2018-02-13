// Declare angular app
var helloWorldApp = angular.module('helloWorldApp', []);
// Declare anguular constant
helloWorldApp.constant('myConfig', {applicationName:'My Angular JS App'});

// Declare angular controller
helloWorldApp.controller('firstController', [
    '$scope', 'myConfig',
    function($scope, myConfig) {
        $scope.appName = myConfig.applicationName;
    }
]);