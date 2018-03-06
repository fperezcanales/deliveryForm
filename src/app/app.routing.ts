import {ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

//Importar componentes
import { HomeComponent } from './home/home.component';
import { EnviarPedidoComponent } from './ordenDelivery/enviarPedido/enviarPedido.component';
import { EntregarPedidoComponent } from './ordenDelivery/entregarPedidos/entregarPedido.component';
import { OrdenDeliveryComponent } from './ordenDelivery/ordenDelivery.component';
import { DireccionesComponent } from './direcciones/direcciones.component';
import { ClienteComponent } from './clientes/cliente.component';

//Importar Nuevos Componentes
import { PedidoAddComponent } from './components/pedido-add.component';
import { PedidoEditComponent } from './components/pedido-edit.component';

const appRoutes : Routes = [
  {path: '', component: HomeComponent},
  { path: 'crear-pedido', component: PedidoAddComponent },
  { path: 'enviarPedido', component: EnviarPedidoComponent },
  { path: 'clientes', component: ClienteComponent },
  { path: 'pedidos/:idEstado', component: ClienteComponent },
  { path: 'listos/:idEstado', component: EntregarPedidoComponent },
  { path: 'entregados/:idEstado', component: EnviarPedidoComponent },

  { path: 'pedido-edit/:idPedido', component: PedidoEditComponent },
  { path: 'direcciones', component: DireccionesComponent },
  {path: '**', component: OrdenDeliveryComponent}
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
