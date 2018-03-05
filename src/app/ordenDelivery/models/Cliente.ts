export class Cliente{
  public _nombre:string;
  public _fono:string;

  constructor(nombre:string, fono:string){
    this._nombre = nombre;
    this._fono = fono;
  }

  ngOnInit(){
    // Se ejecuta despues del constructor, podria llamar una fcc ajax
  }
}
