angular.module("module_controllers", [])
       .controller("ctrl_list", ["$scope",  "$http",function ($scope, $http) {
       	    //$scope.title = "list";
       	    //$scope.data_list = [];
       	    $http.jsonp(" http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSON_CALLBACK")
       	         .success(function (data) {
       	         	$scope.data_list = data;
       	         })
       }])
       .controller("ctrl_detail", ["$scope", "$http", "$routeParams", function ($scope, $http, $routeParams) {
       	    // 通过路由的参数获取详细信息
       	    var send_data = "goodsID=" + $routeParams.goodsID;
       	    $http.jsonp(" http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSON_CALLBACK&" + send_data)
       	         .success(function (data) {
       	         	$scope.data_detail = data;
       	         })
       }])