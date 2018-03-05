import { Component } from '@angular/core';
import { Pedido } from '../models/pedido';
//import { PedidoEditService } from '../services/pedidoEdit.service';
import { PeticionesService } from '../service/peticiones.service';

import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector : 'pedido-edit',
  templateUrl : '../views/pedido-add.html'
})

export class PedidoEditComponent{
  public titulo: string;
  public pedido: Pedido;

  constructor(//private _pedidoEditService: PedidoEditService,
              private _pedidoEditService: PeticionesService,
              private _route: ActivatedRoute,
              private _router: Router)
  {
    console.log( this._route.snapshot.queryParams["idPedido"] );
    let idPedido = this._route.snapshot.queryParams["idPedido"];
    this.titulo = 'Servicio Editar Pedido';
    this.pedido = new Pedido(0,"","","",0);
    this.pedido.id = idPedido;
  }

  ngOnInit()
  {
     console.log( "Servicio ngOnInit()"+this.pedido.id):  
     this._pedidoEditService.getPedidoById(this.pedido.id)
                    .subscribe(val => {
                        this.pedido.cliente = val.cliente;
                        this.pedido.direccion = val.direccion;
                        this.pedido.descripcion = val.descripcion;
                        this.pedido.total = val.total;
                        this.pedido.fono = val.fono;
                    });
  }

  onSubmit () {
      ///let idPedido = this._route.snapshot.queryParams["idPedido"];
      console.log( "Servicio Editar .update()" + this.pedido.id);
      this._pedidoEditService.update(this.pedido, this.pedido.id);
      this._router.navigate(['/clientes']);
  }
}
