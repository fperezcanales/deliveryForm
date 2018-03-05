"use strict";
var Orden = (function () {
    function Orden(descripcion) {
        this.fch_registro = new Date().toLocaleString();
        this.descripcion = descripcion;
    }
    Orden.prototype.ngOnInit = function () {
        // Se ejecuta despues del constructor, podria llamar una fcc ajax
    };
    return Orden;
}());
exports.Orden = Orden;
//# sourceMappingURL=Orden.js.map