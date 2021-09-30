import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAFlickComponent } from './components/add-a-flick/add-a-flick.component';
import { EditFlickComponent } from './components/edit-flick/edit-flick.component';
import { HomeComponent } from './components/home/home.component';
import { MyFlicksComponent } from './components/my-flicks/my-flicks.component';
import { PickAFlickComponent } from './components/pick-a-flick/pick-a-flick.component';
import { SearchResultsUserDbComponent } from './components/search-results-user-db/search-results-user-db.component';
import { ManageTagsComponent } from './components/manage-tags/manage-tags.component';
import { ViewFlickComponent } from './components/view-flick/view-flick.component';
import { ViewFlicksByTagComponent } from './components/view-flicks-by-tag/view-flicks-by-tag.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'movies', component: MyFlicksComponent},
  {path: 'movies/:movieId', component: ViewFlickComponent},
  {path: 'movies-edit/:movieId', component: EditFlickComponent},
  {path: 'tags-manage', component: ManageTagsComponent},
  {path: 'movies-add', component: AddAFlickComponent},
  {path: 'movies-search', component: PickAFlickComponent},
  {path: 'movies-results', component: SearchResultsUserDbComponent},
  {path: 'movies-search/:tagId', component: ViewFlicksByTagComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
