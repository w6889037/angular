import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {

  constructor() { }

  print(){
    alert("HelloService");
  }
}
