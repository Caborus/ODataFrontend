import { Component } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss']
})

export class PokemonTableComponent {
  dataSource: any;
  
  constructor() {
    this.dataSource = {
      store: {
        type: 'odata',
        url: 'http://localhost:5279/odata/Pokemons',
        key: 'Id',
        version: 4,
      },
    };
    
  }
}
