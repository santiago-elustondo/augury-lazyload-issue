import {Injectable} from '@angular/core';

@Injectable()
export class Service1 {
  value: string;

  constructor() {
    console.log('loaded service1');
    this.value = 'i am service 1';
  }

}
