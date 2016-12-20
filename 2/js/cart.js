/**
 * Created by Rundong Zou.
 * time: 2016/12/20 22:27
 * version: 1.0
 */
angular.module("module_cart", [])
       .controller("controller_cart", ["$scope", "$http", "$filter", function ($scope, $http) {
       	    $scope.cart_data = [];
       	    $scope.total_num = 0;
       	    $scope.total_price = 0;
       	    $http.jsonp("http://datainfo.duapp.com/shopdata/getCar.php?callback=JSON_CALLBACK&userID=zourundong").success(function (data) {
       	    	console.log(data);
       	    	$scope.cart_data = data;
       	    })
       	    
       	    $scope.change_number = function (type, index) {
       	    	var num = $scope.cart_data[index].number * 1;
       	    	if (type) {
       	    		$scope.cart_data[index].number = num + type;
       	    	} else {
       	    		$scope.cart_data.splice(index, 1);
       	    	}
       	    };
       	    $scope.$watch("cart_data", function (new_val) {
       	    	var total_num = 0;
       	    	var total_price = 0;
       	    	for (var i = 0, len = new_val.length; i < len; i++) {
       	    		total_num += new_val[i].number * 1;
       	    		total_price += new_val[i].price * new_val[i].number;
       	    	}
       	    	$scope.total_num = total_num;
       	    	$scope.total_price = total_price;
       	    }, true)
       }])
       







