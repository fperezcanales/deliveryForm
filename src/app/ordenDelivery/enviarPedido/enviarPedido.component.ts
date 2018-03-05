import { Component } from '@angular/core';
import { OrdenDelivery } from '../ordenDelivery'

@Component({
  selector : 'enviarPedido',
  templateUrl : './enviarPedido.component.html'
})

export class EnviarPedidoComponent{
    ordenDelivery:OrdenDelivery = new OrdenDelivery("pizza xxl","fernando perez","987654321");
}
