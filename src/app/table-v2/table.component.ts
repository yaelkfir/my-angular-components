import { Component, OnInit } from '@angular/core';
import {SearchService} from '../service/movie.service';
import {MovieModel} from "../models/movieModel";

@Component({
  selector: 'app-table-two',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableTwoComponent implements OnInit {

  data: Array<MovieModel>;
  keys: Array<string>;
  target: object = {
    key: '',
    data: MovieModel
  };
  isInput:boolean = false;

  constructor(
    private _searchService: SearchService
  ) { }

  ngOnInit() {
    const tempMovie = new MovieModel(0);
    tempMovie.newMovie({});
    // console.info(tempMovie);
    this.keys = Object.keys(tempMovie);
    console.info(this.keys);
    this.getRes('batman');
  }
  getRes(query: string | null) {
    this._searchService.getMovies(query).subscribe((data) => {
      this.data = data.results.map(res => this.newMovie(res));
      // console.info(this.data);
    })
  }
  newMovie(res) {
    const test = new MovieModel(res.id);
    return test.newMovie(res)
  }
}
