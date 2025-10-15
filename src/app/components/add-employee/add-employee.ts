import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-employee.html',
  styleUrls: ['./add-employee.css']
})
export class AddEmployeeComponent {
  employee: Employee = {
    firstName: '',
    lastName: '',
    emailId: ''
  };

  constructor(private employeeService: EmployeeService, private router: Router) {}

  onSubmit(): void {
    this.employeeService.addEmployee(this.employee).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }
}
