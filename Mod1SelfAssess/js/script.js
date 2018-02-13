var localDateTime = angular.module('localDateTime', []);

localDateTime.controller('dtController', [
    '$scope',
    function($scope) {
        $scope.dateTime = new Date();
    }
]);