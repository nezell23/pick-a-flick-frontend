import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MyFlicksComponent } from './components/my-flicks/my-flicks.component';
import { ViewFlickComponent } from './components/view-flick/view-flick.component';
import { EditFlickComponent } from './components/edit-flick/edit-flick.component';
import { TagsComponent } from './components/tags/tags.component';
import { AddAFlickComponent } from './components/add-a-flick/add-a-flick.component';
import { PickAFlickComponent } from './components/pick-a-flick/pick-a-flick.component';
import { SearchResultsUserDbComponent } from './components/search-results-user-db/search-results-user-db.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MyFlicksComponent,
    ViewFlickComponent,
    EditFlickComponent,
    TagsComponent,
    AddAFlickComponent,
    PickAFlickComponent,
    SearchResultsUserDbComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
