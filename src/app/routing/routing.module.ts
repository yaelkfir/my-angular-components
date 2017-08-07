import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MultiSelectionComponent} from '../multi-selection/multi-selection.component';
import {NavComponent} from '../nav/nav.component';
import {MyFormComponent} from '../my-form/my-form.component';
import {TableComponent} from "../table-v1/table.component";
import {TableTwoComponent} from "../table-v2/table.component";

const routes: Routes = [
  {
    path: 'nav',
    component: NavComponent,
    pathMatch: 'full'

  },
  {
    path: 'table',
    component: TableComponent,
    pathMatch: 'full'
  },
  {
    path: 'tablev2',
    component: TableTwoComponent,
    pathMatch: 'full'
  },
  {
    path: 'form',
    component: MyFormComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [
    RouterModule
  ],
  providers: []
})
export class RoutingModule {
}
