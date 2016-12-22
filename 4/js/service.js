angular.module("module_service", [])
	   .service("myService", function () {
		   this.name = "zou",
		   this.hello = function () {
		   	   console.log("hello: " + this.name + " myService");
		   }
	   })
	   .factory("myFactory", function () {
	   	   return {
	   	   	name: "zou",
	   	   	hello: function () {
	   	   		console.log("hello: " + this.name + " myFactory");
	   	   	}
	   	   }
	   })
	   .provider("myProvider", function () {
	   	    return {
	   	    	type: "made by zou",
	   	    	$get: function () {
	   	    		//需要返回供应商
	   	    		return {
	   	    			name: "zou",
	   	    			hello: function () {
	   	    				console.log("hello: " + this.name + " myProvider");
	   	    			}
	   	    		}
	   	    	}
	   	    }
	   })
	   .config(["myServiceProvider", "myFactoryProvider", "myProviderProvider", function (myServiceProvider, myFactoryProvider, myProviderProvider) {
	   	    console.log(myServiceProvider); 
	   	    console.log(myFactoryProvider);
            console.log(myProviderProvider);
	   }])
	   .controller("myCtrl", ["$scope", "myService", "myFactory", "myProvider", function ($scope, myService, myFactory, myProvider) {
	   	    myService.hello();
	   	    myFactory.hello();
	   	    myProvider.hello();
	   	    console.log(myService); 
	   	    console.log(myFactory);
            console.log(myProvider);
	   }])
		       