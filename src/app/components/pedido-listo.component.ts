import { Component } from '@angular/core';
import { Pedido } from '../models/pedido';
//import { PedidoEditService } from '../services/pedidoEdit.service';
import { PeticionesService } from '../service/peticiones.service';

import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector : 'pedido-listo', // TODO: CREA PAGINA
  templateUrl : '../views/pedido-listo.html'
})

export class PedidoListoComponent{
  public titulo: string;
  public pedido: Pedido;
  private _idPedido ;
  constructor(//private _pedidoEditService: PedidoEditService,
              private _pedidoEditService: PeticionesService,
              private _route: ActivatedRoute,
              private _router: Router)
  {
     this._route.params.subscribe(params => {
        this.titulo = 'ENVIO';
        this.pedido = new Pedido(0,"","","",0);
        this.pedido.id =  params['idPedido'];
    });
  }

  ngOnInit()
  {
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

  actualizarEstado2 () {
      ///let idPedido = this._route.snapshot.queryParams["idPedido"];
      console.log( "Servicio Editar .actualizarEstado2()" + this.pedido.id);
      this._pedidoEditService.updateEstado2(this.pedido.id);
      this._router.navigate(['/clientes']);
  }
}
