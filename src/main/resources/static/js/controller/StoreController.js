var app = angular.module('myApp');

app.controller('StoreController',['$scope','$http', function($scope,$http){
	
	$http.get("http://localhost:9000/fresherangular/product/list")
    .success(function(data) {
        $scope.products = data;
    }).error(function(){
    	alert("Can't load data");
    });
	
	$scope.increaseAvailable = function(product) {
		product.available++;
		};
		
	$scope.decreaseAvailable = function(product) {
		if (product.available > 0) {
  			product.available--;
		}

		};
		
	$scope.addRow = function(){
		
		$scope.product = {
			model: $scope.Model,
			year: $scope.Year,
			price: $scope.Price,
			producer: $scope.Producer,
			available: $scope.Available
		};
		
		$http.post("http://localhost:9000/fresherangular/product/add", $scope.product)
	    .success(function() {
	    	
	    	$scope.Model = "";
			$scope.Year = "";
			$scope.Price = "";
			$scope.Producer = "";
			$scope.Available = "";
			
			$http.get("http://localhost:9000/fresherangular/product/list")
		    .success(function(data) {
		        $scope.products = data;
		    }).error(function(){
		    	alert("Can't load data");
		    });
		
	    }).error(function(){
	    	alert("Can't add row");
	    });
	};
	
	
	$scope.deleteProduct = function(product) {
		$scope.products.splice( $scope.products.indexOf(product), 1 );
	};
		
			
}]);

app.directive("productList", function(){
	return{
		restrict: 'E',
		templateUrl: "/fresherangular/views/product-list.html"
	};
});

app.controller('DetailController',['$scope','$http','$routeParams', function($scope,$http,$routeParams){
	$http.get("http://localhost:9000/fresherangular/product/get/" + $routeParams.id)
    .success(function(data) {
         $scope.object = data;
         console.log(data);
    }).error(function(){
    	alert("Can't load detail page");
    });
}]);

app.run(['$window', '$rootScope', 
         function ($window ,  $rootScope) {
           $rootScope.goBack = function(){
             $window.history.back();
           };
}]);




