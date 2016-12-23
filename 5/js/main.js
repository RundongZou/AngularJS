angular.module("my_app", ["ngRoute", "module_controllers"])
       .config(["$routeProvider", function ($routeProvider) {
       	    $routeProvider.when("/list", {
       	    	templateUrl: 'template/list.html',
                controller: "ctrl_list"
       	    }).when("/detail/:goodsID", {
       	    	templateUrl: 'template/detail.html',
//     	    	controller: function ($scope) {
//     	    		$scope.title = "详情页面"
//     	    	}
                controller: "ctrl_detail"
       	    }).otherwise({redirectTo: "/list"})
       }]);