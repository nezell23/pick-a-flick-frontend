import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAFlickComponent } from './components/add-a-flick/add-a-flick.component';
import { EditFlickComponent } from './components/edit-flick/edit-flick.component';
import { HomeComponent } from './components/home/home.component';
import { MyFlicksComponent } from './components/my-flicks/my-flicks.component';
import { PickAFlickComponent } from './components/pick-a-flick/pick-a-flick.component';
import { SearchResultsUserDbComponent } from './components/search-results-user-db/search-results-user-db.component';
import { TagsComponent } from './components/tags/tags.component';
import { ViewFlickComponent } from './components/view-flick/view-flick.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'viewall', component: MyFlicksComponent},
  {path: 'viewall/:movieId', component: ViewFlickComponent},
  {path: 'edit/:movieId', component: EditFlickComponent},
  {path: 'tags/:movieId', component: TagsComponent},
  {path: 'add', component: AddAFlickComponent},
  {path: 'search', component: PickAFlickComponent},
  {path: 'results', component: SearchResultsUserDbComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
