angular.module("directives",[])
       .directive("myHeader", function () {
       	    return {
       	    	restrict: "EA",
       	    	templateUrl: 'template/header.html',
       	    	replace: true,
       	    	transclude: true
       	    }
       })
       .directive("myFooter", function () {
       	    return {
       	    	restrict: "EA",
       	    	templateUrl: 'template/footer.html',
       	    	replace: true,
       	    	scope: {
       	    		ind: "@index"	
       	    	},
       	    	controller: function ($scope) {
       	    		$scope.class_data = ["首页", "列表", "购物车", "发现", "我的"];
       	    		//console.log($scope.ind);
       	    	}
       	    }
       })
       








