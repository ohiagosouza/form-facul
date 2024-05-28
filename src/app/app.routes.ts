import { Routes } from '@angular/router';
import { ClientComponent } from './pages/cliente/client.component';
import { CompanyComponent } from './pages/business/company.component';

export const routes: Routes = [
  {
    path: 'client',
    component: ClientComponent,
  },
  {
    path: 'company',
    component: CompanyComponent,
  },
];
