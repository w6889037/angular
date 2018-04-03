import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { HelloService } from '../service/hello.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  name:String;
  name2:String;
  list:Array<String>;
  list2:any;
  inputValue:String;
  html:String;

  constructor(private helloService : HelloService) {
    this.name = "qqq";
    this.name2 = "www";
    this.list = ["aaa","bbb","ccc"];
    this.list2 = [{"username":"eee","age":"11"},{"username":"rrr","age":"22"}];
    this.html = "<a href='http://www.baidu.com'>baidu</a>";
  }

  ngOnInit() {
  }

  redirect(){
    alert($("#iii").val());
  }

  keyup(e){
    console.log(e);
  }

  callService(){
    this.helloService.print();
  }
}
