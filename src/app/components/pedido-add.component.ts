import { Component } from '@angular/core';
import { Pedido } from '../models/pedido';
import { PedidoService } from '../services/pedido.service';

import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector : 'pedido-add',
  templateUrl : '../views/pedido-add.html'
})

export class PedidoAddComponent{
  public titulo: string;
  public pedido: Pedido;

  constructor(private _pedidoService: PedidoService,
              private _route: ActivatedRoute,
              private _router: Router)
  {
    this.titulo = 'Nueva Orden';
    this.pedido = new Pedido(0,"","","",0);
  }


  ngOnInit(){
    console.log('pedidio-add cargado...');
  }
  onSubmit () {
      this.pedido.tipoEntrega = 1; //Delivery
      this.pedido.estado = 1; // Pendiente

      this._pedidoService.addPedido(this.pedido);
      this._router.navigate(['/clientes']);
  }

  onSubmitServir () {

      this.pedido.tipoEntrega = 3; //Servir
      this.pedido.estado = 3; // Finalizado

      this._pedidoService.addPedido(this.pedido);
      this._router.navigate(['/clientes']);
  }

  onSubmitRetiroLocal () {

      this.pedido.tipoEntrega = 2; //Servir
      this.pedido.estado = 1; // pendiente
      this.pedido.direccion = 'Retiro Local'; // pendiente
      this._pedidoService.addPedido(this.pedido);
      this._router.navigate(['/clientes']);
  }
}
