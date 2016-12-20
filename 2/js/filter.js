angular.module("module_filter", [])
       .filter("myFilter_uppercase", function () {
       	    return function (str) {
       	    	var str_split_by_blank = str.split(' ');
       	    	for (var i = 0, len = str_split_by_blank.length; i < len; i++) {
	       	    	str_split_by_blank[i] = 
	       	    	str_split_by_blank[i][0].toUpperCase()
	       	    	+ str_split_by_blank[i].substring(1);
	       	    }
       	    	return str_split_by_blank.join(' ');
       	    }
       })
       .controller("controller_filter", ["$scope", "$http", "$filter", function ($scope, $http, $filter) {
       	    $http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php?callback=success").success(success=function(response) {
				$scope.data_list = response;
				//console.log(response)
		});	

//      $scope.name = "zou run dong";
//     $scope.name = $filter("limitTo")($scope.name, 5);
//     $scope.price = $filter("orderBy")($scope.price, 'price*1');

        $scope.name = "zou run dong";
        $scope.name = $filter("myFilter_uppercase")($scope.name);
       }])
       








