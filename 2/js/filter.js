/**
 * Created by Rundong Zou.
 * time: 2016/12/20 20:27
 * version: 1.1
 */
angular.module("module_filter", [])
       .filter("myFilter_uppercase", function () {
       	// 每个单词的首字母大写
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
       .filter("myFilter_date", function () {
       	// 自定义日期格式
       	    return function () {
       	    	var date = new Date();
       	    	var hour = date.getHours() < 9 ? '0' + date.getHours() : date.getHours();
       	    	var minute = date.getMinutes() < 9 ? '0' + date.getMinutes() : date.getMinutes();
       	    	var second = date.getSeconds() < 9 ? '0' + date.getSeconds() : date.getSeconds();
       	    	var time_formated = date.getFullYear() + "年"
       	    	                   + (date.getMonth() + 1) + "月"
       	    	                   + date.getDate() + "日"
       	    	                   + hour + "时"
       	    	                   + minute + "分"
       	    	                   + second + "秒"
       	    	return time_formated;
       	    }
       })
       .filter("myFilter_staticLanguage", function () {
       	//过滤出集合中满足某种条件的元素
       	    return function (input) {
       	    	var output = [];
       	    	angular.forEach(input, function (language) {
       	    		if (language.type === "static") {
       	    			output.push(language);
       	    		}
       	    	})
       	    	return output;
       	    }      	
       })
       .controller("controller_filter", ["$scope", "$http", "$filter", function ($scope, $http, $filter) {
       	    $http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php?callback=success").success(success=function(response) {
			$scope.data_list = response;
			//console.log(response)
		});	
		$scope.languages = [
		    {"name": "C#", "type": "static" },
		    {"name": "PHP", "type": "dynamic" },
		    {"name": "Go", "type": "static" },
		    {"name": "JavaScript", "type": "dynamic" },
		    {"name": "Rust", "type": "static" }
		]

//      $scope.name = "zou run dong";
//      $scope.name = $filter("limitTo")($scope.name, 5);
//      $scope.price = $filter("orderBy")($scope.price, 'price*1');

        $scope.name = "zou run dong";
        $scope.name = $filter("myFilter_uppercase")($scope.name);
        $scope.time = $filter("myFilter_date")();
        
       }])
       








