export class Pedido {

  public fechaActualizacion:Date;
  public fono;
  public proceso;

  constructor (
    public id: number,
    public cliente: string,
    public direccion: string,
    public descripcion: string,
    public total: number
  ){
    this.fechaActualizacion = Date();
  }
}
