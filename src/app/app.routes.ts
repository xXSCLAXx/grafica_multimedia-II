import { Routes } from '@angular/router';
import {ListaCelulares} from './components/lista-juegos/lista-juegos';
import {DetalleCelular} from './components/detalle-juego/detalle-juego';

export const routes: Routes = [
  { path: '', component: ListaCelulares},
  { path: 'celular/:nombre', component: DetalleCelular}
];
