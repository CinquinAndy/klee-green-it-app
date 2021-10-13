import {Component, Input, OnInit} from '@angular/core';
import {StoreService} from "../../../services/Store/store.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() title: string = "";
  @Input() alternative: boolean = false;

  constructor(private store : StoreService) {
  }

  ngOnInit(): void {
    console.log(this.store.getSelectedApplications());
  }


}
