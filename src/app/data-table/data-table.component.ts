import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-data-table',
  imports: [DataTablesModule, CommonModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit {
  dtOptions: any = {};  
  data = [
    { serialno: '1' , publisher: 'John Doe', email: 'john@exmarketplace.com' },
    { serialno: '2' , publisher: 'Jane Smith', email: 'smith@exmarketplace.com' },
    { serialno: '3' , publisher: 'Jack White', email: 'white@exmarketplace.com' },
    { serialno: '4' , publisher: 'Samson', email: 'samson@exmarketplace.com' },
    { serialno: '5' , publisher: 'Willse', email: 'willse@exmarketplace.com' },
    { serialno: '6' , publisher: 'Andrew', email: 'andrew@exmarketplace.com' },
    { serialno: '7' , publisher: 'Nura', email: 'nura@exmarketplace.com' },
    { serialno: '8' , publisher: 'Yellowster', email: 'yellowster@exmarketplace.com' },
    { serialno: '9' , publisher: 'Sherin', email: 'sherin@exmarketplace.com' },
    { serialno: '10' , publisher: 'Boston', email: 'boston@exmarketplace.com' },
    { serialno: '11' , publisher: 'Jack White', email: 'white@exmarketplace.com' },
    { serialno: '12' , publisher: 'Jack White', email: 'white@exmarketplace.com' },
    { serialno: '13' , publisher: 'Jack White', email: 'white@exmarketplace.com' }
  ];

  viewItem(item: any) {
    console.log('View item:', item);
  }
  editItem(item: any) {
    console.log('Edit item:', item);
  }
  disableItem(item: any) {
    console.log('Disable item:', item);
  }
  copytags(item: any) {
    console.log('Copy tags:', item);
  }
  golive(item: any) {
    console.log('Go Live:', item);
  }
  deleteItem(item: any) {
    console.log('Delete item:', item);
  }

  constructor() {}

  ngOnInit(): void {
    this.dtOptions = {
      paging: true,
      searching: true,
      ordering: true,
      info: true,
    };
  }
}

