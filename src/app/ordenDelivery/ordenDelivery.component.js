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
var ordenDelivery_1 = require("./ordenDelivery");
var peticiones_service_1 = require("../service/peticiones.service");
var OrdenDeliveryComponent = (function () {
    function OrdenDeliveryComponent(_peticionesService) {
        this._peticionesService = _peticionesService;
        this.estadoSeleccionado = "jola";
        this.ordenDelivery = new ordenDelivery_1.OrdenDelivery("pizza xxl", "fernando perez", "987654321");
    }
    OrdenDeliveryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._peticionesService.getPedidosHoy().subscribe(
        //this._peticionesService.getPrueba().subscribe(
        function (result) {
            //for (var item in result) {console.log(result[item]);}
            _this.pedidosHoy = result;
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    };
    return OrdenDeliveryComponent;
}());
OrdenDeliveryComponent = __decorate([
    core_1.Component({
        selector: 'ordenDeliveryCmpnt',
        templateUrl: './ordenDelivery.component.html'
    }),
    __metadata("design:paramtypes", [peticiones_service_1.PeticionesService])
], OrdenDeliveryComponent);
exports.OrdenDeliveryComponent = OrdenDeliveryComponent;
//# sourceMappingURL=ordenDelivery.component.js.map