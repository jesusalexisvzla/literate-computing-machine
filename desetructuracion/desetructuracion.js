var obj = { x: 1, y: 2, z: 3 };
console.log(obj.x); //	1
var x = obj.x, y = obj.y, z = obj.z;
console.log(x); //	1
var array = [1, 2, 3];
console.log(array[0]); //	1
var x = array[0], y = array[1], z = array[2];
console.log(x); //	1
var array = [1, 2, 3, 4];
var x = array[0], y = array[1], rest = array.slice(2);
console.log(x, y, rest); //	1,	2,	[3,4]
