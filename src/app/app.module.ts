import 'devextreme/data/odata/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonTableComponent } from './components/pokemon-table/pokemon-table.component';
import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    PokemonTableComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }