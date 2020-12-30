import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  public name: any;
  constructor(
    private route: ActivatedRoute,
  ) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params[''];
    });
  }
}
