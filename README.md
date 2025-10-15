# Angular Employee Management (Standalone)

> This is a modern Angular 20+ standalone employee management app with Bootstrap UI, Spring Boot backend integration, and robust error handling. Anyone can clone, run, and extend this project easily.

## Features
- Standalone Angular architecture (no app.module.ts)
- Employee CRUD: list, add, edit
- Bootstrap 5 UI
- API status indicator & error toast notifications
- Spring Boot REST backend integration

## Getting Started

### 1. Clone the repository
```sh
git clone https://github.com/Moto-Dinesh/angular-employee-management.git
cd angular-employee-management
```

### 2. Install dependencies
```sh
npm install
```

### 3. Start the development server
```sh
ng serve
```
Visit [http://localhost:4200](http://localhost:4200) in your browser.

### 4. Run tests
```sh
ng test
```

### 5. Build for production
```sh
ng build
```

## Backend API
This app expects a Spring Boot REST API running at `http://localhost:8080/api/employees`.

## Project Structure
- `src/main.ts`: App bootstrap and provider configuration
- `src/app/app.routes.ts`: Route definitions
- `src/app/models/employee.ts`: Employee model
- `src/app/services/employee.ts`: Service for backend communication
- `src/app/components/employee-list/employee-list.*`: Employee list UI
- `src/app/components/add-employee/add-employee.*`: Add employee form
- `src/app/components/edit-employee/edit-employee.*`: Edit employee form

## Contributing
Fork the repo, create a branch, and submit a pull request. Issues and suggestions welcome!

## License
MIT
