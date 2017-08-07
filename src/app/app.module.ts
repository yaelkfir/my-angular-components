import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { Router } from '@angular/router';
import { AppRoutingModule } from './routing/app-routing.module';
import { SearchService } from './service/movie.service'


import { AppComponent } from './app-component/app.component';
import { MultiSelectionComponent } from './multi-selection/multi-selection.component';
import { NavComponent } from './nav/nav.component';

import 'rxjs/add/operator/map';
// import { NotSelectedComponent } from './not-selected/not-selected.component';
import { MyFormComponent } from './my-form/my-form.component';
import { SearchComponent } from './search/search.component';
import { TableComponent } from './table-v1/table.component'
import {Ng2TableModule} from 'ng2-table';
import {DataTableModule} from "angular2-datatable";
import { TableDataComponent } from './table-v1/table-data/table-data.component';
import {TableDataTwoComponent} from "./table-v2/table-data/table-data.component";
import {TableTwoComponent} from "./table-v2/table.component";


@NgModule({
  declarations: [
    AppComponent,
    MultiSelectionComponent,
    NavComponent,
    // NotSelectedComponent,
    MyFormComponent,
    SearchComponent,
    TableComponent,
    TableDataComponent,
    TableDataTwoComponent,
    TableTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    Ng2TableModule,
    DataTableModule
  ],
  providers: [ SearchService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
