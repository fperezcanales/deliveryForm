import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector : 'entregarPedido',
  templateUrl : './entregarPedido.component.html'
})

export class EntregarPedidoComponent{
  public titulo = 'Listos para entrega';
  public cliente_nombre = 'fernando';
  public cliente_fono = '987654321';
  private _idEstado:number;
  //public cliente_fecha_registro;
  //public d = (new Date() - 1);
  //d.setDate(d.getDate()-1);

  items: FirebaseListObservable<any[]>;

  constructor(private _af: AngularFireDatabase,
              private _route: ActivatedRoute)
  {

  }

  ngOnInit(){
    // Se ejecuta despues del constructor, podria llamar una fcc ajax
    this.sub = this._route.params.subscribe(params => {
      this._idEstado=  params['idEstado'];
      this.items = this._af.list('/pedidos' , {
                      query: {
                        orderByChild: 'estado',
                        equalTo: 2 // this._idEstado //this._estadoId
                      }});
    });

    //this.getPedidosPorEstado(this._idEstado);
  }

  getPedidosPorEstado( idEstado){
    alert('getPedidosPorEstado '+idEstado);
    this.items = this._af.list('/pedidos' , {
                    query: {
                      orderByChild: 'estado',
                      equalTo: idEstado // this._idEstado //this._estadoId
                    }});
  }
}
