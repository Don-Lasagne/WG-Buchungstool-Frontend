import {Routes} from '@angular/router';
import {UebersichtComponent} from './uebersicht/uebersicht.component';

export const routes: Routes = [
  {path: "start", component: UebersichtComponent, pathMatch: "full"},
  {path: "**", redirectTo: "start"}
];
