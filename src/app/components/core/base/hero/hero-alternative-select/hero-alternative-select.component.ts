import {Component, Input, OnInit, NgIterable, NgModule} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Application} from "../../../../../interfaces/application";
import {CommonModule} from "@angular/common";
import {GetListAppService} from "../../../../../services/CallAPI/get-list-app.service";
import {PostAppNameService} from "../../../../../services/CallAPI/post-app-name.service";

import {HttpErrorHandler, HandleError} from "../../../../../services/http-error-handler.service";
import application from "@angular-devkit/build-angular/src/babel/presets/application";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {StoreService} from "../../../../../services/Store/store.service";

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
    if (!this.applicationsList.find(elem => elem.name === this.form.value.selectNameApp)) {
      this.postApplicationService(this.form.value.selectNameApp);
    } else {
      this.store.setApplications(this.applicationsList);
      this.store.setSelectedApplications({id: 0, name: this.form.value.selectNameApp});
    }
    this.router.navigate(['/home'], {relativeTo: this.route});
  }

  constructor(private fb: FormBuilder,
              private getListAppServiceConstruc: GetListAppService,
              private postApplicationNameServiceConstruc: PostAppNameService,
              private route: ActivatedRoute,
              private router: Router,
              private store : StoreService
  ) {
    this.form = this.fb.group({
      selectNameApp: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.getListApplicationsService();
  }

  getListApplicationsService(): void {
    this.getListAppServiceConstruc.getApplicationList()
      .subscribe(applications => {
        this.applicationsList = applications;
        this.store.setApplications(applications);
      })
  }

  postApplicationService(newAppName: string): void {
    console.log(newAppName)
    this.postApplicationNameServiceConstruc.postApplicationName(newAppName)
      .subscribe(app => {
        this.applicationsList.push({id: 0, name: newAppName});
        this.store.setApplications(this.applicationsList);
        this.store.setSelectedApplications({id: 0, name: newAppName});
      })
  }
}

