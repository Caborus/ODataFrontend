import { Component } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver-es';
import { exportDataGrid } from 'devextreme/excel_exporter';


@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss']
})

export class PokemonTableComponent {
  dataSource: any;
  url = 'http://localhost:5279/odata/Pokemons';

  constructor() {
    this.dataSource = {
      store: {
        type: 'odata',
        url: this.url,
        key: 'Id',
        version: 4,
      },
    };
  }

  onExporting(e: any) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Pokemon');

    exportDataGrid({
      component: e.component,
      worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
      });
    });
    e.cancel = true;
  }
  
}
