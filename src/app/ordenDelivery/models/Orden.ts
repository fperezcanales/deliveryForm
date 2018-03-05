export class Orden  {
  public descripcion:string ;
  public fch_registro:string;

  constructor(descripcion:string){
    this.fch_registro = new Date().toLocaleString();
    this.descripcion = descripcion;
  }

  ngOnInit(){
    // Se ejecuta despues del constructor, podria llamar una fcc ajax
  }
}
