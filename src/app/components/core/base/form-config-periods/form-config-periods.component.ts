import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Tables} from "../../../../interfaces/tables";
import {StoreService} from "../../../../services/Store/store.service";
import {FilterMaxDate} from "../../../../functions/filterMaxDate";
import {FilterMinDate} from "../../../../functions/filterMinDate";
import {dateFormatDatetimelocal} from "../../../../functions/dateFormat-datetimelocal";

@Component({
  selector: 'app-form-config-periods',
  templateUrl: './form-config-periods.component.html',
  styleUrls: ['./form-config-periods.component.scss']
})
export class FormConfigPeriodsComponent implements OnInit {
  tables: Array<Tables> = [];
  form: FormGroup;
  min_date?: string;
  max_date?: string;
  now: string = dateFormatDatetimelocal(new Date(Date.now()));

  constructor(private fb: FormBuilder,
              private store: StoreService) {
    this.tables = store.getTables()
    this.min_date = dateFormatDatetimelocal(FilterMinDate(this.tables));
    this.max_date = dateFormatDatetimelocal(FilterMaxDate(this.tables));
    this.form = this.fb.group({
      cible_start: ['', [Validators.required]],
      cible_end: ['', [Validators.required]],
      mesured_start: [this.min_date, [Validators.required]],
      mesured_end: [this.max_date, [Validators.required]],
    })
  }

  ngOnInit(): void {

  }

  submit() {

  }
}
