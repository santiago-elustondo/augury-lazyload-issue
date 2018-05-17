import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { TestService } from './test.service';

import { Service2 } from '../services/service2';

@Component({
  selector: 'app-lazy-load',
  templateUrl: './lazy-load.component.html',
  styleUrls: []
})
export class LazyLoadComponent implements OnInit {

  constructor(
    private testService: TestService,
    private translate: TranslateService,
  ) { }

  ngOnInit() {
    console.log(this.testService.value)
    console.log(this.translate)
  }

}
