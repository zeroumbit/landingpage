import { Routes } from '@angular/router';
import { HomePage } from './home/home';
import { ConsultoriaPage } from './consultoria/consultoria';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'consultoria', component: ConsultoriaPage },
];
