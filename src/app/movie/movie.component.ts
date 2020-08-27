import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: any

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.movieService.cast.subscribe(movie =>{
      this.movie = movie;
      console.log("observer called")
      console.log(movie)
    })
  }

}
