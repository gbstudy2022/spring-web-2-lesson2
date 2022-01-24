angular.module('market-front').controller('ordersController', function ($scope, $http, $localStorage) {
    const contextPath = 'http://localhost:8189/app';

    $scope.loadOrders = function () {
        $http.get(contextPath + '/api/v1/orders/')
            .then(function successCallback(response) {
                $scope.OrderList = response.data;
            }, function errorCallback(response) {
                    alert('UNAUTHORIZED');
            });
    }

    $scope.loadOrders();
});