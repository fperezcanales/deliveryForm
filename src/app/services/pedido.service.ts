import {Injectable} from '@angular/core' ;
/*import {Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';*/

import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
//models
import { Pedido } from '../models/pedido';

@Injectable()
export class PedidoService {
  public url:string ;
  items: FirebaseListObservable<any[]>;
  itemsRef: FirebaseListObservable<any[]>;
  private _dbFire: AngularFireDatabase;

  public item:Pedido;

  constructor(db: AngularFireDatabase) {
    console.log('constructor pedido.service.ts');
    this.itemsRef = db.list('/pedidos');//.valueChanges();
    //this.url = 'https://jsonplaceholder.typicode.com/posts' ; //'https://deliveryform-c007a.firebaseio.com/pedidos.json';
  }
  getPrueba(){
    return 'Hola desde el servicio';
  }


  getPedido(af: AngularFireDatabase)
  {
    this.items = af.list('/pedidos');

  }

  addPedido(pedido: Pedido )
  {
    pedido.estado = 1: // por defecto

    this.itemsRef.push(   pedido ).then((item) => {
                   alert('  added successfully');
                  }, () => {
                   alert('Error while saving event')
                  }).catch((err) => {
                    alert(err)
                  });
  }
}
