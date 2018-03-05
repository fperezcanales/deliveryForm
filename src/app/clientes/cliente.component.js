"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ClienteComponent = (function () {
    //public cliente_fecha_registro;
    function ClienteComponent() {
        this.cliente_nombre = 'fernando';
        this.cliente_fono = '987654321';
        //this.cliente_fecha_registro = new Date().toLocaleString();
    }
    ClienteComponent.prototype.ngOnInit = function () {
        // Se ejecuta despues del constructor, podria llamar una fcc ajax
    };
    return ClienteComponent;
}());
ClienteComponent = __decorate([
    core_1.Component({
        selector: 'cliente',
        templateUrl: './cliente.component.html'
    }),
    __metadata("design:paramtypes", [])
], ClienteComponent);
exports.ClienteComponent = ClienteComponent;
//# sourceMappingURL=cliente.component.js.map