import {Cliente} from './models/Cliente'
import {Direccion} from './models/Direccion'
import {Orden} from './models/Orden'

export class OrdenDelivery{

  public _cliente:Cliente;
  public _orden:Orden;
  public _direccion:Direccion = new Direccion();

  constructor(orden:string , cliente:string, fono:string ){
      this._cliente = new Cliente(cliente , fono);
      this._orden = new Orden(orden);
  }

}
