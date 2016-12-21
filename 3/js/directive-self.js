angular.module("directive_self", [])
       .directive("hello", function () {
       	    return {
       	    	restrict: "EACM",
       	    	template: '<div>hello zou</div>',
       	    	replace: true
       	    }
       })