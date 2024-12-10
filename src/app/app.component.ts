import { Component } from '@angular/core';
import { DataTableComponent } from './data-table/data-table.component';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-root',
  imports: [DataTableComponent, DataTablesModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Project';
}
