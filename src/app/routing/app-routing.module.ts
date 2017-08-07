import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MultiSelectionComponent} from '../multi-selection/multi-selection.component';
import {NavComponent} from '../nav/nav.component';
import {MyFormComponent} from '../my-form/my-form.component';
import {TableComponent} from "../table-v1/table.component";
import {TableTwoComponent} from "../table-v2/table.component";

const appRoutes: Routes = [
  {
    path: 'form',
    component: MyFormComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'tablev2',
    component: TableTwoComponent,
  },
  {
    path: 'nav',
    component: NavComponent,
  },
  {path: '', redirectTo: '/nav', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule {
}
