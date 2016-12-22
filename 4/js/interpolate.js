angular.module("module_interpolate",[])
       .controller("controller_interpolate", ["$scope", "$interpolate", function ($scope, $interpolate) {
       	    $scope.text3 = "";
       	    $scope.fn_change = function () {
       	    	var temp = $interpolate($scope.val3);
       	    	$scope.text3 = temp({
       	    		val1: $scope.val1,
       	    		val2: $scope.val2
       	    	})
       	    }
       	    
       }])