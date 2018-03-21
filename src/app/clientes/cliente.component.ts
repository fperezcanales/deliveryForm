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
  private _idEstado:number;

  items; //: FirebaseListObservable<any[]>;

  constructor(private _af: AngularFireDatabase,
              private _route: ActivatedRoute)
  {
  }

  ngOnInit()
  {
    var today = new Date(); today.setHours(0,0,0,0);

    this._route.params.subscribe(params => {
      this._idEstado=  params['idEstado'];

      this.items = this._af.list('/pedidos' , {
                      query: {
                        //orderByChild: 'estado',
                        //equalTo: 1 // this._idEstado //this._estadoId
                        orderByChild: 'fechaCreacion',
                        startAt: {value: today.toString(), key: 'fechaCreacion'},
                        limitToFirst: 30
                      }}).map((items)=> {
                          items = items.filter(function(item) {
                              if(item.estado == 1){
                                return item ;
                              }
                          })
                          return items;
                      });
    });

  }
}
