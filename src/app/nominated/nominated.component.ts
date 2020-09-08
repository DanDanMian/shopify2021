import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-nominated',
  templateUrl: './nominated.component.html',
  styleUrls: ['./nominated.component.css']
})
export class NominatedComponent implements OnInit {
  nominatedArr: any

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.movieService.castNominatedMovies.subscribe(nominated => {
      this.nominatedArr = nominated;
      console.log(this.nominatedArr.length);
    })
  }

  delete(movie: any) {
    console.log("delete func called: " + JSON.stringify(movie));
    this.movieService.removeNominatedMovie(movie);
  }
}
