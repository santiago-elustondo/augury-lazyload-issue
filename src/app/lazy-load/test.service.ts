import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Service2 } from '../services/service2';

@Injectable()
export class TestService {
  value: string = 'test-service';
  constructor(
    // private router: Router,
    private service2: Service2
  ) {
    // console.log(this.router);
    console.log(`loaded lazy service, service 2: "${this.service2.value}"`);
    this.value = this.value + ' Id: ' + Math.floor(Math.random() * 500);
  }
}
