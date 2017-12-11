import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { PokemonsModule } from './pokemons/pokemons.module';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

// IMPORT !
// Permet de déclarer tous les éléments que l'on a besoin d'importer dans notre module. 
// Les modules racines ont besoin d'importer le  BrowserModule (contrairement aux autres modules que 
// nous ajouterons par la suite dans notre application).

// DECLARATIONS ! 
// Une liste de tous les composants et directives qui appartiennent à ce module. 
// Nous avons donc ajouté notre unique composant AppComponent. 

// BOOTSTRAP ! 
// Permet d'identifier le composant racine, que Angular appelle au démarrage de l'application. Comme le module racine est 
// lancé automatiquement par Angular au démarrage de l'application, et que  AppComponent est le composant racine du module racine, 
// c'est donc  AppComponent  qui apparaîtra au démarrage de l'application.

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    PokemonsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
