import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAFlickComponent } from './components/add-a-flick/add-a-flick.component';
import { EditFlickComponent } from './components/edit-flick/edit-flick.component';
import { HomeComponent } from './components/home/home.component';
import { MyFlicksComponent } from './components/my-flicks/my-flicks.component';
import { PickAFlickComponent } from './components/pick-a-flick/pick-a-flick.component';
import { ManageTagsComponent } from './components/manage-tags/manage-tags.component';
import { ViewFlickComponent } from './components/view-flick/view-flick.component';
import { ViewFlicksByTagComponent } from './components/view-flicks-by-tag/view-flicks-by-tag.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersService } from './services/users.service';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate:[UsersService]},
  {path: 'movies', component: MyFlicksComponent, canActivate:[UsersService]},
  {path: 'movies/:movieId', component: ViewFlickComponent, canActivate:[UsersService]},
  {path: 'movies-edit/:movieId', component: EditFlickComponent, canActivate:[UsersService]},
  {path: 'tags-manage', component: ManageTagsComponent, canActivate:[UsersService]},
  {path: 'movies-add', component: AddAFlickComponent, canActivate:[UsersService]},
  {path: 'movies-search', component: PickAFlickComponent, canActivate:[UsersService]},
  {path: 'movies-search/:tagId', component: ViewFlicksByTagComponent, canActivate:[UsersService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
