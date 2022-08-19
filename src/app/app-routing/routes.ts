import { Routes } from '@angular/router';

import { RankingComponent } from '../ranking/ranking.component';
import { BooksComponent } from '../books/books.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';


export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'books', component: BooksComponent },
  //{ path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },

  //{ path: '', redirectTo: '/login', pathMatch: 'full' }
];
