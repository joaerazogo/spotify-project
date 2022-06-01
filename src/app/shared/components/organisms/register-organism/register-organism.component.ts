import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-organism',
  templateUrl: './register-organism.component.html',
  styleUrls: ['./register-organism.component.scss']
})
export class RegisterOrganismComponent implements OnInit {

  fieldInformationRegister: Array<any> = [
    {
      textLabel: "Username",
      textClass: "h3 mb-3 font-weight-normal mb-4",
      inputType: "text",
      inputId: "username",
      inputClass: "form-control mb-3",
      inputPlaceHolder: "Username"
    },
    {
      textLabel: "Email Adress",
      textClass: "h3 mb-3 font-weight-normal mb-4",
      inputType: "email",
      inputId: "inputEmail",
      inputClass: "form-control mb-3",
      inputPlaceHolder: "Email address"
    },
    {
      textLabel: "Password",
      textClass: "h3 mb-3 font-weight-normal mb-4",
      inputType: "password",
      inputId: "password",
      inputClass: "form-control mb-3",
      inputPlaceHolder: "Password"
    },
    {
      textLabel: "Repeat Password",
      textClass: "h3 mb-3 font-weight-normal mb-4",
      inputType: "password",
      inputId: "inputRepeatPassword",
      inputClass: "form-control mb-3",
      inputPlaceHolder: "Repeat Password"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
