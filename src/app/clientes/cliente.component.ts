import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector : 'cliente',
  templateUrl : './cliente.component.html'

})

export class ClienteComponent{
  public titulo = 'Pendientes';
  public cliente_nombre = 'fernando';
  public cliente_fono = '987654321';
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
    var _estadoId:number = this._route.snapshot.queryParams["id"];
    console.log('_estadoId '+ _estadoId);

    this.items = this._af.list('/pedidos' , {
                    query: {
                      orderByChild: 'estado',
                      equalTo: 1 //this._estadoId
                    }});
  }

  getPedidosPorEstado(){
    console.log('getPedidosPorEstado');
  }
}
