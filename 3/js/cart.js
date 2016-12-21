angular.module("cartApp",["directives"])
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
       	    	var id = $scope.cart_data[index].goodsID;
       	    	var count = 0;
       	    	if (type) {
       	    		if (type == 1) {
       	    			$scope.cart_data[index].number = num + 1;
       	    			count = $scope.cart_data[index].number;
       	    		} else {
       	    			if (num > 1) {
       	    				$scope.cart_data[index].number = num - 1;
       	    				count = $scope.cart_data[index].number;
       	    			}       	    			
       	    		}      	    		
       	    	} else {
       	    		$scope.cart_data.splice(index, 1);
       	    		count = 0;
       	    	}
       	    	$http.get("http://datainfo.duapp.com/shopdata/updatecar.php?&userID=zourundong&goodsID="+id+"&number="+count+"").success(function (data) {
       	    	//console.log(data);
       	    	$scope.cart_data = data;
       	    })      	    	
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