var myapp = angular.module('aApp', ['ui.sortable']);


myapp.controller('AAppController', function ($scope, $http) {
    getData();

    $scope.sortableOptions = {
        stop: function(e, ui) {
                for (var index in $scope.categories[0].products) {
                    $scope.categories[0].products[index].index = index;
                    $http.put('/products/' + $scope.categories[0].products[index].id, {index: index}).
                        success(function(data, status, headers, config) {
                            console.info('product updated');
                        });
                };
        }
    };

    $scope.addProduct = function(productName, productDescription, productPrice, categoryId){
        console.info('111');
        $http.post('/products/', {name: productName, description: productDescription, price: productPrice, cid: categoryId}).
            success(function(data, status, headers, config) {
                $("#productName, #productDescription, #productPrice").val("");
                getData();
            });
    }

    function getData(){
        $http.get("categories.json").success(function(response) {$scope.categories = response;});
    }
});