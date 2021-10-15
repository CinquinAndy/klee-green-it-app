import {Component, Input, OnInit} from '@angular/core';
import {StoreService} from "../../../../services/Store/store.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() title: string = "";
  @Input() alternative: boolean = false;
  @Input() homeTemplate : boolean = false;
  @Input() src : string = '../../../../../assets/svg/compare_klee_v2_forms.svg';

  constructor(private store : StoreService) {
  }

  ngOnInit(): void {

  }
}
