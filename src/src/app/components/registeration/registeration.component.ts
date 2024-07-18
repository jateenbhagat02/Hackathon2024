import { Binary } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  public is_registered_successfully = false;
  public registered_as = '';
  constructor() { }

  ngOnInit(): void {
    this.is_registered_successfully = false;
  }

  onClickSubmit(data) {
    this.is_registered_successfully = true;
    this.registered_as = data.check_pt ? 'Nurse':  'Patient';
    console.log(data.value);
  }

}
