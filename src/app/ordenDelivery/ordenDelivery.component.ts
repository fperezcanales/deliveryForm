import { Component } from '@angular/core';
import { OrdenDelivery } from './ordenDelivery'
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector : 'ordenDeliveryCmpnt',
  templateUrl : './ordenDelivery.component.html'

})

export class OrdenDeliveryComponent{

    public pedidosHoy:Array<any>;
    constructor(
      private _peticionesService: PeticionesService
    ){}

    ngOnInit(){
      this._peticionesService.getPedidosHoy().subscribe(
      //this._peticionesService.getPrueba().subscribe(
        result => {
          //for (var item in result) {console.log(result[item]);}
          this.pedidosHoy = result;
          console.log( result );
        },
        error =>{
          console.log(error);
        }
      );
    }
    estadoSeleccionado:string = "jola";
    ordenDelivery:OrdenDelivery = new OrdenDelivery("pizza xxl","fernando perez","987654321");
}
