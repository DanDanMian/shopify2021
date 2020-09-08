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

  search(){
    const query = `https://www.omdbapi.com/?s=${ this.value }&apikey=7e02c70f`;
    this.http.get(query).subscribe(obj =>{
      this.movieService.searchedMovie({'title': this.value, 'movies': obj })
    });
    // this.value = "";
  }
}
