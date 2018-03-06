import {Injectable} from '@angular/core' ;
import {Http, Response, Headers } from '@angular/http';

import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

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

  update( body , idPedido )
  {
    console.log( 'https://deliveryform-c007a.firebaseio.com/pedidos/'+idPedido+'.json' );

    const req = this._http.put( 'https://deliveryform-c007a.firebaseio.com/pedidos/'+idPedido+'.json' , {
      cliente: body.cliente ,
      descripcion: body.descripcion ,
      direccion: body.direccion ,
      fechaActualizacion: body.fechaActualizacion ,
      fono: body.fono ,
      total: body.total,
      estado: 1
    }).subscribe( res => {
          console.log(res);
        },err => {
          console.log("Error occured");
        }
      );
  }

  getPedidoById( id )
  {
      return this._http.get( this.url + id + '.json' )
                .map( res => res );
  }

  getPedidoEspecifico(id ){
      //   console.log( "getPedidoEspecifico "+  id );

        return this._http.get(this.url)
                         .map(data => {
                            return data;
                          });

    //return this._pedido ;
  }

  getPedidosHoy(){
    return this._http.get(this.url)
                //.map(res => res.val());
                .map(res => res.json());

  }
}
