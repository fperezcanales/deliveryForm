import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders }  from './app.routing';
import { HttpModule } from "@angular/http";

import { HttpClientModule} from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';


import { firebaseConfig } from '../environments/firebase.config';

import { AppComponent } from './app.component';
import { MenuNavComponent }  from './menuNav/menuNav.component';
import { HomeComponent }  from './home/home.component';
import { EnviarPedidoComponent }  from './ordenDelivery/enviarPedido/enviarPedido.component';
import { EntregarPedidoComponent }  from './ordenDelivery/entregarPedidos/entregarPedido.component';
import { PeticionesService } from './service/peticiones.service';
import { ClienteComponent }  from './clientes/cliente.component';
import { DireccionesComponent }  from './direcciones/direcciones.component';
import { OrdenDeliveryComponent }  from './ordenDelivery/ordenDelivery.component';

//Importar Nuevos Componentes
import { PedidoAddComponent } from './components/pedido-add.component';
import { PedidoEditComponent } from './components/pedido-edit.component';
import { PedidoListoComponent } from './components/pedido-listo.component';
import { PedidoDeliveryComponent } from './components/pedido-delivery.component';
import { ReporteVentaComponent } from './components/reporte-venta.component';

import { PedidoService } from './services/pedido.service';
import { PedidoEditService } from './services/pedidoEdit.service';

@NgModule({
  declarations: [
    AppComponent, MenuNavComponent, HomeComponent,
                    EnviarPedidoComponent , EntregarPedidoComponent,
                    ClienteComponent, DireccionesComponent, OrdenDeliveryComponent,
                    PedidoAddComponent, PedidoEditComponent, PedidoListoComponent, PedidoDeliveryComponent,
                    ReporteVentaComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing, HttpModule, HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [AngularFireDatabase,
              appRoutingProviders,
              PedidoService, PedidoEditService,
              PeticionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
