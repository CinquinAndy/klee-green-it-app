import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  loading : boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.loading = false;
  }

}
