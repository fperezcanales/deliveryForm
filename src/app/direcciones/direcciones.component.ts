import { Component } from '@angular/core';

@Component({
  selector : 'direcciones',
  templateUrl : './direcciones.component.html'

})

export class DireccionesComponent{
  public no_normalizada = 'av normandie 345';
  public comuna = 'Santiago';
  public pais = 'Chile';
  public normalizada = 'Avenida Normandie 345';
  
}
