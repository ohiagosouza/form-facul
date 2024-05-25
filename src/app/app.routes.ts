import { Routes } from '@angular/router';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { EmployeeComponent } from './pages/employee/employee.component';

export const routes: Routes = [
  {
    path: 'clients',
    component: ClienteComponent,
  },
  {
    path: 'employee',
    component: EmployeeComponent,
  },
];
