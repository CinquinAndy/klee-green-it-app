import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StoreService} from "../../../../services/Store/store.service";
import {Tables} from "../../../../interfaces/tables";

@Component({
  selector: 'app-form-config-references',
  templateUrl: './form-config-references.component.html',
  styleUrls: ['./form-config-references.component.scss']
})
export class FormConfigReferencesComponent implements OnInit {
  dataMesured: Array<Tables> = [];
  form: FormGroup;


  constructor(private fb: FormBuilder,
              private store: StoreService) {
    this.dataMesured = this.store.getTables();
    console.log(this.dataMesured)
    let formInit = {};
    for (const data of this.dataMesured) {
      // @ts-ignore
      formInit[data.table_name + '_minimum'] = ['', [Validators.required]];
      // @ts-ignore
      formInit[data.table_name + '_maximum'] = ['', [Validators.required]];
      // @ts-ignore
      formInit[data.table_name + '_average'] = ['', [Validators.required]];
      // @ts-ignore
      formInit[data.table_name + '_variation'] = ['', [Validators.required]];
    }
    this.form = this.fb.group(formInit);
  }

  ngOnInit(): void {

  }

  submit() {
    this.store.setReferences(this.form.value);
  }
}
