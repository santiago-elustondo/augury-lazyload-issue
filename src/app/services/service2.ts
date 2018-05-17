import {Injectable} from '@angular/core';
import {Service1} from './service1';

@Injectable()
export class Service2 {
  value: string;

  constructor(
    private service1: Service1
  ) {
    console.log('loaded service2');
    this.value = 'i am service2';
  }

}
