function echo1(arg) {
    return arg;
}
var a1 = echo1(1); //	El	typeof	es	Number 
var b1 = echo1("Hola	mundo"); //	El	typeof	es	String
var Generic = /** @class */ (function () {
    function Generic() {
    }
    return Generic;
}());
var myGeneric = new Generic();
console.log(myGeneric.add = function (x, y) { return x + y; });
console.log(myGeneric.add(3, 4));
//	El	parametro	hereda	de	la	interfaz	la	cual	fuerza	al	parametro	tenga	el	método	leng th 
function echo2(arg) {
    console.log(arg.length);
    return arg;
}
//	Esto	funcionará 
var a2 = echo2("aaa");
var t = echo2({ length: 2, name: "aa" });
//	Esto	NO	funcionará 
//let	b2	=	echo2(1);
function copyFields(source, target) {
    for (var id in source) {
        if (target[id] != undefined) {
            source[id] = target[id];
        }
        else {
            target[id] = source[id];
        }
    }
    return target;
}
var a = { a: 1, b: 2, c: 3 };
var b = copyFields(a, { b: 10, c: 20 }); //	Esto	funcionará 
var c = copyFields(a, { Q: 20 }); //	Esto	NO	funcionará
console.log(b); //	1,	10,	20 
console.log(c); //	Lo	devuelve	si	lo	compilas	a	pesar	de	saber	que	está	mal
