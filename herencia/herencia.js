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
//	Herencia
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + "\tmoved\t" + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino(name) {
        return _super.call(this, name) || this;
    }
    Rhino.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 10; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Rhino;
}(Animal));
var Elephant = /** @class */ (function (_super) {
    __extends(Elephant, _super);
    function Elephant(name) {
        return _super.call(this, name) || this;
    }
    Elephant.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 20; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Elephant;
}(Animal));
//	Para	poder	Crear	un	array	con	este	typo	de	objetos	tenemos	que	utilizar	la	clase	Pa dre	Ej:
var array = [new Rhino('Rinocerator'), new Snake("Serpentina"), new Elephant("Elefanton")];
//	El	acceso	a	este	ejemplo	sería	muchisimo	más	sencillo
var ej2 = { Rhino: new Rhino('Rinocerator'), Snake: new Snake("Serpentina"), Elephant: new Elephant("Elefanton") };
console.log(array);
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.log = function () {
        console.log('hello	world');
    };
    return Base;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.log = function () { _super.prototype.log.call(this); };
    ;
    return Child;
}(Base));
var Base1 = /** @class */ (function () {
    function Base1() {
        //	realizamos	una	función	mediante	el	uso	de	fat	arrow		
        this.log = function () {
            console.log('hello	world');
        };
    }
    return Base1;
}());
var Child1 = /** @class */ (function (_super) {
    __extends(Child1, _super);
    function Child1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child1.prototype.logWorld = function () { this.log(); };
    ;
    return Child1;
}(Base1));
