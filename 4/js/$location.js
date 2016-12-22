angular.module("module_location",[])
       .controller("controller_location", ["$scope", "$location", function ($scope, $location) {
	       	console.log("绝对地址： " + $location.absUrl());
	       	console.log("路径： " + $location.path());
	       	console.log("主机名： " + $location.host());
	       	console.log("端口号： " + $location.port());
	       	console.log("协议： " + $location.protocol());
	       	console.log("search: " + $location.search());
	       	console.log("hash: " + $location.hash());
	       	$scope.fn_click = function () {
	       		$location.path("path1");
	       		$location.search({"goodID": 10});
	       		$location.hash("ngHash");
	       	}
       }])













