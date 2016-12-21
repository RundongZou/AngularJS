angular.module("module_code", [])
       .controller("code", ["$scope", "$timeout", function ($scope, $timeout) {
       	    $scope.btnText = "获取验证码";
       	    $scope.cantSend = false;
       	    $scope.fnSend = function () {
       	    	var num = 60;
       	    	$scope.btnText = "60s后重新获取验证码";
       	    	$scope.cantSend = true;
       	    	$scope.countTime(num);
       	    }
       	    $scope.countTime = function (num) {
       	    	$timeout(function () {
       	    		num --;
       	    		if (!num) {
       	    			$scope.btnText = "获取验证码";
       	                $scope.cantSend = false;
       	    		} else {
       	    			$scope.btnText = num + "s后重新获取验证码";
       	    			$scope.countTime(num);
       	    		}
       	    	}, 100)
       	    }
       }])