
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('employee-frontend');
  apiStatus: 'online' | 'offline' | 'checking' = 'checking';
  showApiErrorToast = false;
  apiErrorMessage = '';

  constructor(private http: HttpClient) {
    this.checkApiStatus();
  }

  checkApiStatus() {
    this.apiStatus = 'checking';
    this.http.get('http://localhost:8080/api/employees').subscribe({
      next: () => {
        this.apiStatus = 'online';
        this.showApiErrorToast = false;
      },
      error: (err) => {
        this.apiStatus = 'offline';
        this.apiErrorMessage = 'Spring Boot API is not available.';
        this.showApiErrorToast = true;
      }
    });
  }

  handleApiError(message: string) {
    this.apiErrorMessage = message;
    this.showApiErrorToast = true;
  }
}
