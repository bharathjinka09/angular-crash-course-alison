import { Injectable } from '@angular/core';
import { Movie } from '../classes/movie';
import { MOVIES } from '../classes/data-movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor() {}

  getMovies(): Promise<Movie[]> {
    return Promise.resolve(MOVIES);
  }
}
