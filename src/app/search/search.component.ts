import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Validators, FormGroup, FormArray, FormBuilder} from '@angular/forms';
import {SearchService} from '../service/movie.service';
import 'rxjs/Rx';
import {MovieModel} from '../models/movieModel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  @Input() mode;

  @Input() parent;
  @Output() searchData: EventEmitter <any> = new EventEmitter<any>();

  public searchF: FormGroup;
  public resData: Array<MovieModel>;

  constructor(private _fb: FormBuilder,
              private _searchService: SearchService) {
  }


  ngOnInit() {


    this.searchF = this._fb.group({
      query: ['', [Validators.required, Validators.minLength(3)]]
    });

    this.parent.controls['search'] = this.searchF;
    this.subToForm();
  }

  subToForm() {
    this.searchF.valueChanges
      .debounceTime(500)
      .subscribe((search) => {
        search.query ? this.getRes(search.query) : this.removeRes();
      })
  }
  removeRes(){
    this.resData = [];
    this.searchData.emit([]);
  }

  getRes(query: string | null) {
    this._searchService.getMovies(query).subscribe((data) => {
      this.resData = data.results.map(res => this.newMovie(res));
      this.searchData.emit(this.resData);
    })
  }

  newMovie(res) {
    const test = new MovieModel(res.id);
    return test.newMovie(res)
  }
}
