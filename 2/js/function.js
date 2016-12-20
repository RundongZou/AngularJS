//isArray
//console.log(angular.isArray([]));
//console.log(angular.isArray(123));
//console.log(angular.isArray(document.getElementsByTagName('body'))); //伪数组

//copy
var obj1 = {
	a: 1,
	json: {
		c: 2
	}
};
// deep copy
//angular
var obj2 = angular.copy(obj1);
//console.log(obj2);
obj2.a = 10;
obj2.json.c = 3;
//console.log(obj2);

//self
var obj3 = JSON.parse(JSON.stringify(obj1));
obj3.a = 100;
obj3.json.c = 30;
console.log(obj3);

// shallow copy

// angular.toJson(json) js对象转json字符串
console.log({a:1});
console.log(angular.toJson({a: 2}));
console.log(JSON.stringify({a: 3}))

// angular.rquals(o1, o2)








