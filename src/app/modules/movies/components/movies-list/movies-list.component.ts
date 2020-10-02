import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../classes/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  movies: Movie[];

  constructor(private moviesService: MoviesService) {}

  getMovies() {
    this.moviesService.getMovies().then((movies) => (this.movies = movies));
  }

  ngOnInit(): void {
    this.getMovies();
  }
}
