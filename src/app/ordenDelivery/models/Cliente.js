"use strict";
var Cliente = (function () {
    function Cliente(nombre, fono) {
        this._nombre = nombre;
        this._fono = fono;
    }
    Cliente.prototype.ngOnInit = function () {
        // Se ejecuta despues del constructor, podria llamar una fcc ajax
    };
    return Cliente;
}());
exports.Cliente = Cliente;
//# sourceMappingURL=Cliente.js.map