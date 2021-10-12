import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-hero-alternative-select',
  templateUrl: './hero-alternative-select.component.html',
  styleUrls: ['./hero-alternative-select.component.scss']
})
export class HeroAlternativeSelectComponent implements OnInit {
  @Input() title: string = "";
  @Input() alternative: boolean = false;
  form : FormGroup;

  submit() {
    // todo submit
    console.log(this.form.status==="VALID")
    console.log(this.form.status==="INVALID")
    console.log(this.form.value)
    //  todo call api
  }
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      select: ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

}
