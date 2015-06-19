var myapp = angular.module('aApp', ['ui.sortable']);


myapp.controller('AAppController', function ($scope, $http) {
    getData();

    $scope.sortableOptions = {
        stop: function(e, ui) {
            var products = [];
            products = products.concat.apply(products, _.map($scope.categories, function(c){return c.products}));
                for (var index in products) {
                    products[index].index = index;
                    $http.put('/products/' + products[index].id, {index: index}).
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
                getData();
            });
    }

    function getData(){
        $http.get("categories.json").success(function(response) {$scope.categories = response;});
    }
});