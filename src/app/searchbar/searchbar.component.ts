import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  OMDB : string
  value = ""

  observer = {
	  next: function(value) {
          console.log(value);
    },
    error: function(error) {
        console.log(error);
    },
    complete: function() {
        console.log('Completed');
    }
  };

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  print(){
    console.log(this.value);
    this.value = "";
    this.http.get('http://www.omdbapi.com/?i=tt3896198&apikey=7e02c70f').subscribe(this.observer);
  }
}
