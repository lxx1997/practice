var Octor = /** @class */ (function () {
    function Octor(name) {
        this.age = 26;
        this.name = name;
    }
    return Octor;
}());
var otr = new Octor("lxx");
var Octor1 = /** @class */ (function () {
    function Octor1(name) {
        this.name = name;
        this.age = 26;
    }
    return Octor1;
}());
var otr1 = new Octor1("lxx");
console.log(otr, otr1);
