import {Component, Input, OnInit, NgIterable, NgModule} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Application} from "../../../../interfaces/application";
import {CommonModule} from "@angular/common";
import {GetListAppService} from "../../../../services/CallAPI/get-list-app.service";
import {PostAppNameService} from "../../../../services/CallAPI/post-app-name.service";

import {HttpErrorHandler, HandleError} from "../../../../services/http-error-handler.service";
import application from "@angular-devkit/build-angular/src/babel/presets/application";

@Component({
  selector: 'app-hero-alternative-select',
  templateUrl: './hero-alternative-select.component.html',
  styleUrls: ['./hero-alternative-select.component.scss']
})
export class HeroAlternativeSelectComponent implements OnInit {
  @Input() title: string = "";
  @Input() alternative: boolean = false;
  applicationsList: Array<Application> = [];
  form: FormGroup;

  submit() {
    // todo submit
    console.log(this.form.status === "VALID")
    console.log(this.form.status === "INVALID")
    console.log(this.form.value)
    //  todo call api
    this.postApplicationService(this.form.value.selectNameApp);
    this.getListApplicationsService();
  }

  constructor(private fb: FormBuilder,
              private getListAppServiceConstruc: GetListAppService,
              private postApplicationNameServiceConstruc: PostAppNameService,
              ) {
    this.form = this.fb.group({
      selectNameApp: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.getListApplicationsService();
  }

  getListApplicationsService(): void {
    console.log('getListApplicationsService')
    this.getListAppServiceConstruc.getApplicationList()
      .subscribe(applications => (this.applicationsList = applications))
  }

  postApplicationService(newAppName : string):void{
    console.log(newAppName)
    this.postApplicationNameServiceConstruc.postApplicationName(newAppName)
      .subscribe(app => {this.applicationsList.push({id:2,name:newAppName});console.log(this.applicationsList)})
  }
}

