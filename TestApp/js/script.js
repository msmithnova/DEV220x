var app = angular.module('testApp', []);

app.controller('testController', function($scope, testConstant) {
    $scope.test = 'hello';
    $scope.constant = testConstant;
});

app.constant('testConstant', 'constantvalue');