import {Injectable} from '@angular/core';
import {Application} from "../../interfaces/application";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private applications: Array<Application> = [];
  private selectedApplications: Application = {id: 0, name: ""};


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

  constructor() {
  }
}
