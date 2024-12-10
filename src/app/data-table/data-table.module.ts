import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTableComponent } from './data-table.component'; 
import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common';  

@NgModule({
  declarations: [
    DataTableComponent,
    DataTablesModule
  ],
  imports: [
    BrowserModule,
    CommonModule,
    DataTablesModule
  ],
  providers: [], 
  bootstrap: [DataTableComponent, DataTablesModule] 
})
export class AppModule { }
