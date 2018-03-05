import {Injectable} from '@angular/core' ;
/*import {Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';*/

import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
//models
import { Pedido } from '../models/pedido';

@Injectable()
export class PedidoEditService {
  public url:string ;
  items: FirebaseListObservable<any[]>;
  itemsRef: FirebaseListObservable<any[]>;
  private _dbFire: AngularFireDatabase;

  public item:Pedido;

  constructor(db:AngularFireDatabase){

  }

  getPedidoById(db:AngularFireDatabase)
  {

  }
}
