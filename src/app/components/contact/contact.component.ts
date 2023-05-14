import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  public contactList = [
    {
      sno: 1,
      name: 'John Doe',
      designation: 'Manager-IT',
      phone: 9876543210
    },
    {
      sno: 2,
      name: 'Abraham',
      designation: 'Manager-Software',
      phone: 9876543211
    },
    {
      sno: 3,
      name: 'Amelie',
      designation: 'Manager-HR',
      phone: 9876543212
    },
    {
      sno: 4,
      name: 'Victoria',
      designation: 'Manager-PR',
      phone: 9876543213
    },{
      sno: 5,
      name: 'Philips',
      designation: 'Manager-Finance',
      phone: 9876543214
    }
  ]

  constructor(){};

  ngOnInit(): void {

  }
}
