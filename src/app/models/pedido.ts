export class Pedido {

  //public fechaActualizacion:Date;
  public fechaCreacion;
  public fechaListo:Date;
  public fechaFin:Date;

  public fono;
  public proceso;
  public estado: number;

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
