import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  searchResults: any

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.movieService.cast.subscribe(searchResults =>{
      this.searchResults = searchResults.Search;
      console.log("observer called")
      console.log(this.searchResults)
    })
  }

  nominate(movie: any) {
    console.log("nominate fun called: " + JSON.stringify(movie));
    this.movieService.addNominatedMovie(movie);
  }
}
