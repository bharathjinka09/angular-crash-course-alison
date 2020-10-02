import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesService } from './services/movies.service';

@NgModule({
  imports: [CommonModule],
  declarations: [MoviesListComponent, MovieComponent],
  providers: [MoviesService],
})
export class MoviesModule {}
