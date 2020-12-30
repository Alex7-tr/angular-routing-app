import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
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
