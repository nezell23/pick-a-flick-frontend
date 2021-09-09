import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAFlickComponent } from './components/add-a-flick/add-a-flick.component';
import { EditFlickComponent } from './components/edit-flick/edit-flick.component';
import { EditTagsComponent } from './components/edit-tags/edit-tags.component';
import { HomeComponent } from './components/home/home.component';
import { MyFlicksComponent } from './components/my-flicks/my-flicks.component';
import { PickAFlickComponent } from './components/pick-a-flick/pick-a-flick.component';
import { SearchResultsUserDbComponent } from './components/search-results-user-db/search-results-user-db.component';
import { TagsComponent } from './components/tags/tags.component';
import { ViewFlickComponent } from './components/view-flick/view-flick.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'movies', component: MyFlicksComponent},
  {path: 'movies/:movieId', component: ViewFlickComponent},
  {path: 'movies-edit/:movieId', component: EditFlickComponent},
  {path: 'movies-edit-tags/:movieId', component: TagsComponent},
  {path: 'tags-edit/:tagId', component: EditTagsComponent},
  {path: 'movies-add', component: AddAFlickComponent},
  {path: 'movies-search', component: PickAFlickComponent},
  {path: 'movies-results', component: SearchResultsUserDbComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
