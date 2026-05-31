import { Routes } from '@angular/router';
import { HomePage } from './home/home';
import { ConsultoriaPage } from './consultoria/consultoria';
import { GovtechPage } from './govtech/govtech';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'consultoria', component: ConsultoriaPage },
  { path: 'govtech', component: GovtechPage },
];
