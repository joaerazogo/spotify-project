import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-organism',
  templateUrl: './login-organism.component.html',
  styleUrls: ['./login-organism.component.scss']
})
export class LoginOrganismComponent implements OnInit {

  fieldInformationLogin: Array<any> = [
    {
      textLabel: "Username",
      textClass: "h3 mb-3 font-weight-normal mb-4",
      inputType: "text",
      inputId: "username",
      inputClass: "form-control mb-3",
      inputPlaceHolder: "Username"
    },
    {
      textLabel: "Password",
      textClass: "h3 mb-3 font-weight-normal mb-4",
      inputType: "password",
      inputId: "password",
      inputClass: "form-control mb-3",
      inputPlaceHolder: "Password"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
