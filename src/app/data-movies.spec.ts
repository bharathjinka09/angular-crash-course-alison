import { DataMovies } from './modules/movies/classes/data-movies';

describe('DataMovies', () => {
  it('should create an instance', () => {
    expect(new DataMovies()).toBeTruthy();
  });
});
