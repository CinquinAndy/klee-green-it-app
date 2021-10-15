import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StoreService} from "../../../../services/Store/store.service";
import {Tables} from "../../../../interfaces/tables";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-config-references',
  templateUrl: './form-config-references.component.html',
  styleUrls: ['./form-config-references.component.scss']
})
export class FormConfigReferencesComponent implements OnInit {
  dataMesured: Array<Tables> = [];
  form: FormGroup;
  @Output() onFormSubmit = new EventEmitter<any>();

  constructor(private fb: FormBuilder,
              private store: StoreService,
              private route: ActivatedRoute,
              private router: Router) {
    this.dataMesured = this.store.getTables();
    let formInit = {};
    for (const data of this.dataMesured) {
      // todo change default value
      // @ts-ignore
      formInit[data.table_name + '_minimum'] = [10, [Validators.required]];
      // @ts-ignore
      formInit[data.table_name + '_maximum'] = [100, [Validators.required]];
      // @ts-ignore
      formInit[data.table_name + '_average'] = [50, [Validators.required]];
      // @ts-ignore
      formInit[data.table_name + '_variation'] = [2, [Validators.required]];
    }
    this.form = this.fb.group(formInit);
  }

  ngOnInit(): void {

  }

  submit() {
    if (this.form.status === "VALID") {
      this.store.setReferences(this.form.value);
      this.onFormSubmit.emit();
    }
  }
}
