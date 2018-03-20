export class Pedido {

  //public fechaActualizacion:Date;
  public fechaCreacion;
  public fechaListo:Date;
  public fechaFin:Date;

  public fono;
  public proceso;
  public estado: number; // 1: Pendiente, 2: Listo, 3: Finalizado

  public tipoPago: number = -1; // 1: Efectivo, 2: Tarjeta Debito, 3: Tarjeta Credito, 4: Otro
  public tipoEntrega:number; //1: Delivery, 2: Retiro Local, 3: Servir

  constructor (
    public id: number,
    public cliente: string,
    public direccion: string,
    public descripcion: string,
    public total: number
  ){
    this.fechaCreacion = Date();
  }
}
