import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {MovieModel} from '../models/movieModel';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})

export class MyFormComponent implements OnInit {
  public myForm: FormGroup;
  public resData: Array<MovieModel>;
  public selectedData: Array<MovieModel>;

  constructor(
    private _fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.myForm = this._fb.group({});
  }

  logForm() {
    console.info(this.myForm);
  }

  resChange(event) {
  this.resData = event;
  console.info(this.resData, 'resData');
  }
  selectedChange(event) {
    console.info(this.selectedData,'emiter?');
    this.selectedData = event
    console.info(this.selectedData, 'selectedData');
  }
}
