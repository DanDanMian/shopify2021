import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies = [];
  private movie = new BehaviorSubject<any>({});
  cast = this.movie.asObservable();

  searchedMovie(movie){
    this.movie.next(movie);
  }

  addMovie(movie){
    this.movies.push(movie);
  }

  removeMovie(id){
    this.movies.slice(id, 1);
  }

  getMovies(){
    return this.movies;
  }
  constructor() { }
}
