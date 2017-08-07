import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SearchService} from "../../service/movie.service";

@Component({
  selector: 'app-table-data-two',
  templateUrl: './table-data-two.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataTwoComponent implements OnInit {
  @Input() key;
  @Input() obj;
  @Output() newData;
  edit: boolean = false;

  public editor: FormGroup;

  constructor(private _fb: FormBuilder,
              private _searchService: SearchService) {
  }

  ngOnInit() {

    this.editor = this._fb.group({
      value: [this.obj[`${this.key}`], [Validators.required, Validators.minLength(3)]]
    });
  }

  // getClick(key, obj) {
  //   console.info(key, obj);
  //   // this.target = this.data.find((temp) => temp.id === obj.id);
  // }

  getMyData(key, movie) {
    return movie[`${key}`]
  }

  log() {
    if (!this.edit) {
      this.edit = true;
    } else {
      this.edit = false;
    }
  }
}
