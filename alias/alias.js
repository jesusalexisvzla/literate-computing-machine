function getName(n) {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}
//	FOO 
var FooIdBrand;
(function (FooIdBrand) {
})(FooIdBrand || (FooIdBrand = {}));
//	BAR 
var BarIdBrand;
(function (BarIdBrand) {
})(BarIdBrand || (BarIdBrand = {}));
