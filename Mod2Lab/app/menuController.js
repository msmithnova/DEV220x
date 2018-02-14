var prices = {'Cheese Pizza': '$10.99', 'Pepperoni Pizza': '$11.99', 'Margherita Pizza': '$13.99', 
            'BBQ Chicken Pizza': '$13.99', 'Combo Pizza': '$13.99'}

app.controller('menuController', [
    '$scope',
    function($scope) {
        $scope.model = {title: 'Our Menu'};
        $scope.$watch('model.mainDish.name', function (newValue, oldValue) {
            if (newValue === 'BBQ Chicken Pizza') {
                alert('You have selected the BBQ Chicken Pizza!');
            }
        });
        $scope.changeMainDish = function(item) {
            
            $scope.model.mainDish = {name: item, price: prices[item]};
        }
    }
])