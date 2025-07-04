import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./auth/sign-up/sign-up.component').then((m) => m.SignUpComponent),
  },
  {
    path: 'books',
    loadComponent: () =>
      import('./books/pages/main/main.component').then((m) => m.MainComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./books/pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'list-books',
        loadComponent: () =>
          import('./books/pages/list-books/list-books.component').then(
            (m) => m.ListBooksComponent
          ),
      },
      {
        path: 'prestamos',
        loadComponent: () =>
          import('./books/pages/loans-books/loans-books.component').then(
            (m) => m.LoansBooksComponent
          ),
      },
      {
        path: 'manage-books',
        loadComponent: () =>
          import('./books/pages/manage-book/manage-book.component').then(
            (m) => m.ManageBookComponent
          ),
      },
      {
        path: 'register-book',
        loadComponent: () =>
          import('./books/pages/register-book/register-book.component').then(
            (m) => m.RegisterBookComponent
          ),
      },
      {
        path: 'manage-account',
        loadComponent: () =>
          import('./books/pages/manage-account/manage-account.component').then(
            (m) => m.ManageAccountComponent
          ),
      },
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
