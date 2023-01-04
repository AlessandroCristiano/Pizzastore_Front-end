import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  { 
    path: 'login', 
    loadChildren:()=> import('./core/auth/login/login.module').then(m => m.LoginModule)
  },
  { 
    path: 'welcome', 
    loadChildren:()=> import('./features/welcome/welcome.module').then(m => m.WelcomeModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'cliente', 
    loadChildren:()=> import('./features/cliente/cliente.module').then(m => m.ClienteModule),
    canActivate: [AuthGuard]
  },
  // { 
  //   path: 'film', 
  //   loadChildren:()=> import('./features/film/film.module').then(m => m.FilmModule),
  //   canActivate: [AuthGuard]
  // },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
