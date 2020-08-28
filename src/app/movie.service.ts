import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  nominatedMoviesArray = []
  private nominatedMoviesObs = new BehaviorSubject<any>([]);
  private movie = new BehaviorSubject<any>({});
  cast = this.movie.asObservable();
  castNominatedMovies = this.nominatedMoviesObs.asObservable();

  searchedMovie(movie){
    this.movie.next(movie);
  }

  addNominatedMovie(movie){
    this.nominatedMoviesArray.push(movie);
    console.log("add nominated movie to service: " + JSON.stringify(movie));
    console.log("nominated list len: " + this.nominatedMoviesArray.length);
    this.nominatedMoviesObs.next(this.nominatedMoviesArray);
  }

  removeNominatedMovie(id){
    this.nominatedMoviesArray.slice(id, 1);
    this.nominatedMoviesObs.next(this.nominatedMoviesArray);
  }

  getNominatedMovies(){
    return this.nominatedMoviesArray;
  }
  constructor() { }
}
