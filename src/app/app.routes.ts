import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list';
import { AddEmployeeComponent } from './components/add-employee/add-employee';
// ...existing code...
import { EditEmployeeComponent } from './components/edit-employee/edit-employee';

export const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'add', component: AddEmployeeComponent },
  { path: 'edit/:id', component: EditEmployeeComponent }
];