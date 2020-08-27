import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  OMDB : string
  value = ""

  constructor() { }

  ngOnInit(): void {
  }

  print(){
    console.log(this.value);
    this.value = "";
  }
}
