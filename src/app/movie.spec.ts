import { Movie } from './modules/movies/classes/movie';

describe('Movie', () => {
  it('should create an instance', () => {
    expect(new Movie()).toBeTruthy();
  });
});
