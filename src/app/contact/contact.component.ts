import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  getName='';
  getEmail='';
  getMsg='';
  onSubmit(data:NgForm){

    console.log(data.value);
    this.getName=data.value.Name;
    this.getEmail=data.value.Email;
    this.getMsg=data.value.Msg;
  }

  constructor() { }

  ngOnInit() {
  }

}
