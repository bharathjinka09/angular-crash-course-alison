import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { MoviesListComponent } from './modules/movies/components/movies-list/movies-list.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: 'characters', component: CharactersListComponent },
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'movies', component: MoviesListComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
