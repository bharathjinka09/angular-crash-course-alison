import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterComponent } from './character/character.component';
import { CharactersService } from './characters.service';
import { MoviesService } from './modules/movies/services/movies.service';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CharactersListComponent,
    CharacterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CharactersService, MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
