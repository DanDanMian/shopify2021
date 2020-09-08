import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  searchResults: any
  searchTitle: string

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.movieService.castMovies.subscribe(searchResults =>{
      this.searchTitle = searchResults.title;
      this.searchResults = searchResults.movies.Search;
      console.log("observer called")
      console.log(searchResults)
    })
  }

  nominate(movie: any) {
    console.log("nominate fun called: " + JSON.stringify(movie));
    this.movieService.addNominatedMovie(movie);
  }
}
