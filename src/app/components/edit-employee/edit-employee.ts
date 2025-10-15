import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmployeeService } from '../../services/employee';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './edit-employee.html',
  styleUrls: ['./edit-employee.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  employeeId: number | null = null;
  loading = true;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {
    this.employeeForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      emailId: ['']
    });
  }

  ngOnInit(): void {
    this.employeeId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.employeeId) {
      this.employeeService.getEmployee(this.employeeId).subscribe({
        next: (employee: Employee) => {
          this.employeeForm.patchValue(employee);
          this.loading = false;
        },
        error: () => {
          this.error = 'Failed to load employee.';
          this.loading = false;
        }
      });
    }
  }

  onSubmit(): void {
    if (this.employeeForm.valid && this.employeeId) {
      const updatedEmployee: Employee = {
        id: this.employeeId,
        ...this.employeeForm.value
      };
      this.employeeService.updateEmployee(this.employeeId, updatedEmployee).subscribe({
        next: () => this.router.navigate(['/']),
        error: () => this.error = 'Failed to update employee.'
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }
}
