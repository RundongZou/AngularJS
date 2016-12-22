angular.module("module_q", [])
       .controller("controller_q", ["$scope", "$q", function ($scope, $q) {
       	    var defer1 = $q.defer();
       	    var promise1 = defer1.promise;
       	    promise1.then(function (data) {
       	    	console.log("zou-success")
       	    }, function (data) {
       	    	console.log("zou-error")
       	    });
       	   
       	    $scope.fn_click = function (err) {
       	    	if (err) {
       	    		defer1.reject("失败");
       	    	} else {
       	    		defer1.resolve("成功")
       	    	}
       	    }
       }])