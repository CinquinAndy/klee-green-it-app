import { Component, OnInit } from '@angular/core';
import {Tables} from "../../../../interfaces/tables";
import {StoreService} from "../../../../services/Store/store.service";

@Component({
  selector: 'app-display-results',
  templateUrl: './display-results.component.html',
  styleUrls: ['./display-results.component.scss']
})
export class DisplayResultsComponent implements OnInit {
  tables : Array<Tables> = [];

  constructor(private store:StoreService) {
    this.tables = this.store.getTables();
    console.log(this.tables);
  }

  ngOnInit(): void {
  }

}
