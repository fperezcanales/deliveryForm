"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ordenDelivery_1 = require("../ordenDelivery");
var EnviarPedidoComponent = (function () {
    function EnviarPedidoComponent() {
        this.ordenDelivery = new ordenDelivery_1.OrdenDelivery("pizza xxl", "fernando perez", "987654321");
    }
    return EnviarPedidoComponent;
}());
EnviarPedidoComponent = __decorate([
    core_1.Component({
        selector: 'enviarPedido',
        templateUrl: './enviarPedido.component.html'
    })
], EnviarPedidoComponent);
exports.EnviarPedidoComponent = EnviarPedidoComponent;
//# sourceMappingURL=enviarPedido.component.js.map