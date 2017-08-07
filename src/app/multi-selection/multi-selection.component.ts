import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Validators, FormGroup, FormArray, FormBuilder} from '@angular/forms';

import {MovieModel} from '../models/movieModel'
import {SearchService} from '../service/movie.service'

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-selection.component.html',
  styleUrls: ['./multi-selection.component.css']
})
/*
 generic multi[le] selection with search and dog tags in angular 4

 */

export class MultiSelectionComponent implements OnInit, OnChanges {
  // set the forms and arrays
  @Input() mode; // set  with search or noraml
  @Input() parent; // set  with search or noraml
  @Input() resData; // set  with search or noraml
  @Output() selectedData: EventEmitter<any> = new EventEmitter<any>();

  public multiSelectF: FormGroup;
  selected: Array<MovieModel> = [];
  target: MovieModel;
  index: number;
  isSubs: boolean = false;


  constructor(private _fb: FormBuilder,
              private _searchService: SearchService) {
  }


  ngOnInit() {
    // connect with parent form
    // get selections

    this.multiSelectF = this._fb.group({
      selections: this._fb.array([])
    });

    this.parent.controls['multiSelect'] = this.multiSelectF;
  }

  ngOnChanges() {
    if (this.resData) {

      this.multiSelectF.controls['selections'] = this._fb.array([]);
      this.isSubs = false;

      this.resData.forEach(() => {
        this.addSelection(false);
      });

      console.info(this.multiSelectF.controls['selections']);
      if (!this.isSubs) {
        this.isSubs = true;
        this.multiSelectF.controls['selections'].valueChanges.subscribe((res) => {
          if (res[this.index].select) {
            const isSelected = this.selected.find((selected) => selected.id === this.target.id);
            if (!isSelected) {
              this.selected = [...this.selected, this.target];
              this.selectedData.emit(this.selected);
            }
            else{

            }

          }
          else{
            console.info('out');
          }
          console.log(res[this.index].select, 'formcontrol?');



        });
      }
    }

  }

  targetRes(i) {
console.info(i, 'i?');

this.target = this.resData[i];
this.index = i
    // console.info(res);
    // this.selected = [...this.selected, res];
    // console.info(this.selected);
    //
    // const index = this.resData.findIndex(i => i.id === res.id);

    // setTimeout(() => {
    //   this.resData.splice(index, 1)
    // }, 250);
    // this.selectedData.emit(this.selected);

  }


  addSelection(value) {
    // add address to the list
    console.log('value', value);

    const control = <FormArray>this.multiSelectF.controls['selections'];
    control.push(this.resToControl(value));

  }

  newMovie(res) {
    console.log(res);

    const test = new MovieModel(res.id);
    return test.newMovie(res)
  }

  resToControl(value) {
    console.log(value);

    return this._fb.group({
      select: [value, Validators.required],
    });
  }

}
