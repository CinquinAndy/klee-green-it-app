import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() title: string = "";

  constructor() {
  }

  ngOnInit(): void {
    // Replace stars englobing a word
    // this.title = this.title.replace(/(\*)(\w+|\w'\w+)(\*)/g, "<span class='font-playfair italic font-black'>$2</span>");
  }

}
