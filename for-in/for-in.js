var list1 = { a: 1, b: 2, c: 3 };
for (var i in list1) {
    console.log(list1[i]); //	1,	2,	3 
}
var list2 = { a: 1, b: 2, c: 3 };
for (var i in list2) {
    console.log(i); //	a,	b,	c 
}
