import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  nominatedMoviesArray = new Set();
  private nominatedMoviesObs = new BehaviorSubject<any>([]);
  private movies = new BehaviorSubject<any>({'title':"", 'movies':{}});
  castMovies = this.movies.asObservable();
  castNominatedMovies = this.nominatedMoviesObs.asObservable();

  searchedMovie(movies: any){
    this.movies.next(movies);
  }

  addNominatedMovie(movie: any){
    if(this.nominatedMoviesArray.size >= 5){
      window.alert("Maximum 5 nominated movies!");
      return;
    }
    this.nominatedMoviesArray.add(movie);
    console.log("add nominated movie to service: " + JSON.stringify(movie));
    console.log("nominated list len: " + this.nominatedMoviesArray.size);
    this.nominatedMoviesObs.next(this.nominatedMoviesArray);
  }

  removeNominatedMovie(movie: any){
    this.nominatedMoviesArray.delete(movie);
    console.log(this.nominatedMoviesArray);
    this.nominatedMoviesObs.next(this.nominatedMoviesArray);
  }

  getNominatedMovies(){
    return this.nominatedMoviesArray;
  }
  constructor() { }
}
