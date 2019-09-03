var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var inc = function (x) { return x + 1; };
function Person1(age) {
    this.age = age;
    //	ejecutandola	en	el	navegador	el	this	es	window		
    //	ya	que	es	quien	hace	la	llamada		
    this.growOld = function () {
        this.age++;
    };
}
var perso1n = new Person1(1);
setTimeout(person.growOld, 1000); //	debería	incrementar	1	+	1	=	2 
setTimeout(function () { console.log(person.age); }, 2000); //	Devuelve	1,	debería	ser	2
function Person2(age) {
    var _this = this;
    this.age = age;
    //	aquí	el	this	es	el	objeto	y	no	quien	hace	la	llamada		
    this.growOld = function () {
        _this.age++;
    };
}
var person2 = new Person2(1);
setTimeout(person.growOld, 1000);
setTimeout(function () { console.log(person.age); }, 2000); //	devuelve	2
var Person = /** @class */ (function () {
    function Person(age) {
        var _this = this;
        this.age = age;
        this.growOld = function () {
            _this.age++;
        };
    }
    return Person;
}());
var person = new Person(1);
setTimeout(person.growOld, 1000);
setTimeout(function () { console.log(person.age); }, 2000); //	2
//	Se	iguala	la	función	de	la	clase	a	una	variable	de	otra	clase 
var growOld = person.growOld;
//	más	adelante se	llama 
growOld();
var _self = this;
something.each(function () {
    console.log(_self); //	the	lexically	scoped	value				
    console.log(this); //	the	library	passed	value 
});
var Adder = /** @class */ (function () {
    function Adder() {
        var _this = this;
        //	This	function	is	now	safe	to	pass	around				
        this.add = function (b) {
            return _this.a + b;
        };
    }
    return Adder;
}());
var ExtendedAdder = /** @class */ (function (_super) {
    __extends(ExtendedAdder, _super);
    function ExtendedAdder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //	Create	a	copy	of	parent	before	creating	our	own				
        _this.superAdd = _this.add;
        //	Now	create	our	override				
        _this.add = function (b) {
            return _this.superAdd(b);
        };
        return _this;
    }
    return ExtendedAdder;
}(Adder));
//	A	curried	function 
var add = function (x) { return function (y) { return x + y; }; };
//	Simple	usage 
add(123)(456);
//	partially	applied 
var add123 = add(123);
//	fully	apply	the	function 
add123(456);
