app.controller('labController', [
    '$scope', 'registration',
    function ($scope, registration) {
        $scope.reset = reset;
        $scope.submit = submit;
        $scope.registered = false;

        reset();

        function reset() {
            $scope.model = {};
        }

        function submit(model) {
            registration.submit(model).$promise
                .then(function (response) {
                    alert('Success. Token is: ' + response.token);
                    reset();
                    $scope.registered = true;
                },
                function (response) {
                    alert('error');
                });
            //alert('Submitted\n' + JSON.stringify(model));
        }
    }
]);