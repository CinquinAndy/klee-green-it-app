import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {GetDataFromTableService} from "../../../services/CallAPI/get-data-from-table.service";
import {StoreService} from "../../../services/Store/store.service";
import {GetListDataMesuredService} from "../../../services/CallAPI/get-list-data-mesured.service";
import {Tables} from "../../../interfaces/tables";

@Component({
  selector: 'app-config-references',
  templateUrl: './config-references.component.html',
  styleUrls: ['./config-references.component.scss']
})
export class ConfigReferencesComponent implements OnInit {
  tables: Array<Tables> = [];
  loading : boolean = true;
  constructor(private fb: FormBuilder,
              private GetListDataMesuredService: GetListDataMesuredService,
              private GetDataMesuredService: GetDataFromTableService,
              private store: StoreService) {
    // in consctructor
  }

  ngOnInit(): void {
    this.getListDataMesured();
  }

  getListDataMesured(): void {
    this.GetListDataMesuredService.getDataMesuredList()
      .subscribe(tables => {
        this.tables = tables;
        this.store.setTables(tables);
        this.completeAllData();
      })
  }

  completeAllData(): void {
    // we shallow copy the object -> to avoid side effect
    let temp = JSON.parse(JSON.stringify(this.tables));
    // go through the list of table & get data for each element
    for (const table of temp) {
      this.GetDataMesuredService.getDataFromTable(table.table_name)
        .subscribe(data => {
          // save the data in the store
          this.store.setData(table.table_name, data);
          // if it's the last data, then set the local tables to the new data
          if (table.table_name === this.tables[this.tables.length - 1].table_name) {
            this.tables = this.store.getTables();
            this.loading = false;
          }
        })
    }
  }
}
