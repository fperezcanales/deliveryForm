"use strict";
var Cliente_1 = require("./models/Cliente");
var Direccion_1 = require("./models/Direccion");
var Orden_1 = require("./models/Orden");
var OrdenDelivery = (function () {
    function OrdenDelivery(orden, cliente, fono) {
        this._direccion = new Direccion_1.Direccion();
        this._cliente = new Cliente_1.Cliente(cliente, fono);
        this._orden = new Orden_1.Orden(orden);
    }
    return OrdenDelivery;
}());
exports.OrdenDelivery = OrdenDelivery;
//# sourceMappingURL=ordenDelivery.js.map