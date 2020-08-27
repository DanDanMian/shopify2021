import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  OMDB : string
  value = ""
  movies = []

  constructor(
    private http: HttpClient,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
  }

  print(){
    console.log(this.value);
    this.value = "";
    this.http.get('http://www.omdbapi.com/?i=tt3896198&apikey=7e02c70f').subscribe(obj =>{
      this.movieService.searchedMovie(obj)
    });
    console.log(this.movies);
  }
}
