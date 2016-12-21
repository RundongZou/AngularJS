angular.module("module_directive",["ngSanitize"])
       .controller("directive_textStyle", ["$scope", function ($scope) {
       	    $scope.name = "zou";
       	    $scope.age = 20;
       	    $scope.str_icon = "&#xe60e;";
       	    $scope.str_html = "<a href='###'>click</a>";
       	    $scope.text_class = { red: true }
       	    $scope.text_style = {
       	    	color: "red",
       	    	backgroundColor: "green",
       	    	fontSize: "40px"
       	    }
       }])
       .controller("directive_textCtrl", ["$scope", function ($scope) {
       	    $scope.ifShow = false;
       }])
       .controller("directive_repeat", ["$scope", function ($scope) {
       	    $scope.data_list = [1, 2, 3, 4, 5];
       }])