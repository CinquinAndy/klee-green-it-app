import {Injectable} from '@angular/core';
import {Application} from "../../interfaces/application";
import {Tables} from "../../interfaces/tables";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private applications: Array<Application> = [];
  private selectedApplications: Application = {id: 0, name: ""};
  private tables: Array<Tables> = [];
  private references: Array<object> = [];
  private dateMin: Date = new Date(Date.now());
  private dateMax: Date = new Date(Date.now());

  // Define methos to add / set / get / clear data for applications
  // ******************************** Applications *******************************
  addToApplications(application: Application) {
    this.applications.push(application);
  }

  getApplications(): Array<Application> {
    return this.applications;
  }

  setApplications(applications: Array<Application>): void {
    this.applications = JSON.parse(JSON.stringify(applications));
  }

  clearApplications(): Array<Application> {
    this.applications = [];
    return this.applications
  }

  // ******************************** Selected Applications *******************************
  getSelectedApplications(): Application {
    return this.selectedApplications;
  }

  setSelectedApplications(selectedApplications: Application) {
    this.selectedApplications = JSON.parse(JSON.stringify(selectedApplications));
  }

  clearSelectedApplications(): Application {
    this.selectedApplications = {id: 0, name: ""}
    return this.selectedApplications;
  }

  // ******************************** List of Mesured Data *******************************
  addTable(table: Tables): void {
    this.tables.push(table);
  }

  getTables(): Array<Tables> {
    return this.tables;
  }

  setTables(tables: Array<Tables>): Array<Tables> {
    this.tables = JSON.parse(JSON.stringify(tables));
    return this.tables;
  }

  clearTables(): void {
    this.tables = [];
  }

  // ******************************** Mesured Data *******************************
  setData(nameTable: string, data: object): Tables | undefined {
    for (const table of this.tables) {
      if (table.table_name === nameTable) {
        table.data = JSON.parse(JSON.stringify(data));
        // @ts-ignore
        table['unite'] = data[0]['unite'];
        // @ts-ignore
        table['min_date'] = data[0]['time'];
        // @ts-ignore
        table['max_date'] = data[data.length - 1]['time'];
        return table;
      }
    }
    return undefined;
  }

  getData(nameTable: string): object | undefined {
    for (const table of this.tables) {
      if (table.table_name === nameTable) {
        return table.data;
      }
    }
    return undefined;
  }

  clearData(nameTable: string): void {
    for (const table of this.tables) {
      if (table.table_name === nameTable) {
        table.data = {};
      }
    }
  }

  // ******************************** References Data *******************************
  setReferences(references: object): object {
    this.references = JSON.parse(JSON.stringify(references));
    return references;
  }

  getReferences(): Array<object> {
    return this.references;
  }

  clearReferences(): void {
    this.references = [];
  }

  // ******************************** Date Min / Date Max Data *******************************
  setDateMin(date: Date): Date {
    this.dateMin = date;
    return date;
  }

  setDateMax(date: Date): Date {
    this.dateMax = date;
    return date;
  }

  getDateMin(): Date {
    return this.dateMin
  }

  getDateMax(): Date {
    return this.dateMax
  }

  constructor() {

  }
}
