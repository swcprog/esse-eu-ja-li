import { Routes } from '@angular/router';

import { RankingComponent } from '../ranking/ranking.component';
import { BooksComponent } from '../books/books.component';
import { HomeComponent } from '../home/home.component';


export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'books', component: BooksComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
