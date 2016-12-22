angular.module("module_customService", [])
       .factory("myService", function () {
       	    return {
       	    	"name": "zou",
       	    	"show": function () {
       	    		alert(this.name)
       	    	}
       	    }
       })
       .factory("product", function () {
       	    return {
       	    	"list": [
       	    	    {
       	    	    	"goodsId": 1,
       	    	    	"name": "苹果",
       	    	    	"price": 5,
       	    	    	"number": 6
       	    	    },
       	    	    {
       	    	    	"goodsId": 2,
       	    	    	"name": "相机",
       	    	    	"price": 5999,
       	    	    	"number": 3
       	    	    },
       	    	    {
       	    	    	"goodsId": 3,
       	    	    	"name": "笔记本电脑",
       	    	    	"price": 8899,
       	    	    	"number": 2
       	    	    }
       	    	],
       	    	delete_item: function (id) {
       	    		//console.log(id);
       	    		for (var i = 0, len = this.list.length; i < len; i ++) {
       	    			if (this.list[i].goodsId === id) {
       	    				this.list.splice(i, 1);
       	    				break;
       	    			}
       	    		}
       	    	},
       	    	add_item: function (item) {
       	    		var new_id = this.list[this.list.length-1].goodsId + 1;
       	    		item.goodsId = new_id;
       	    		this.list.push(item);
       	    	}
       	    }
       })
       .controller("myCtrl", ["$scope", "product", function ($scope, product) {
       	    $scope.data_list = product.list;
       	    $scope.delete_item = function (id) {
       	    	product.delete_item(id);
       	    }
       	    $scope.add_item = function () {
       	    	product.add_item({
       	    		"name": $scope.name, //和html里面的ng-model="name"相绑定
       	    		"price": $scope.price,
       	    		"number": $scope.number
       	    	});
       	    }
       }])
       



















