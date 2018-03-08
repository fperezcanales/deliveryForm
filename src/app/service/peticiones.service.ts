import {Injectable} from '@angular/core' ;
import {Http, Response, Headers } from '@angular/http';

import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Pedido } from '../models/pedido';

@Injectable()
export class PeticionesService {
  public url:string ;
  private _pedido: Pedido;

  constructor(private _http: HttpClient){
    this.url = 'https://deliveryform-c007a.firebaseio.com/pedidos/';
  }

  getPrueba(){
    return 'Hola desde el servicio';
  }

  update( body:Pedido , idPedido )
  {   const sequence$ = this._http.get(
              'https://deliveryform-c007a.firebaseio.com/pedidos/'+idPedido+'.json' )
          .switchMap(course => {
            course.cliente = body.cliente ;
            course.descripcion = body.descripcion ;
            course.direccion = body.direccion ;
            course.fono = body.fono ;
            course.total = body.total;
            console.log(course);
              return this._http.put(
                  'https://deliveryform-c007a.firebaseio.com/pedidos/'+idPedido+'.json' ,
                  course)
          });
          sequence$.subscribe(res => {
                console.log(res);
              },err => {
                console.log( err );
              });
  }

  updateEstado2(  idPedido )
  {   const sequence$ = this._http.get(
          'https://deliveryform-c007a.firebaseio.com/pedidos/'+idPedido+'.json' )
      .switchMap(course => {
          course.estado = 2;
          course.fechaListo = new Date();
          return this._http.put(
              'https://deliveryform-c007a.firebaseio.com/pedidos/'+idPedido+'.json' ,
              course)
      });
      sequence$.subscribe(res => {
            console.log(res);
          },err => {
            console.log( err );
          });
  }

  updateEstado3(  idPedido )
  {   const sequence$ = this._http.get(
          'https://deliveryform-c007a.firebaseio.com/pedidos/'+idPedido+'.json' )
      .switchMap(course => {
          course.estado = 3;
          course.fechaFin = new Date();
          return this._http.put(
              'https://deliveryform-c007a.firebaseio.com/pedidos/'+idPedido+'.json' ,
              course)
      });
      sequence$.subscribe(res => {
            console.log(res);
          },err => {
            console.log( err );
          });
  }

  getPedidoById( id )
  {
      return this._http.get( this.url + id + '.json' )
                .map( res => res );
  }

  getPedidoEspecifico(id ){
      return this._http.get(this.url)
                         .map(data => {
                            return data;
                          });
  }

  getPedidosHoy(){
    return this._http.get(this.url)
                //.map(res => res.val());
                .map(res => res.json());
  }
}
