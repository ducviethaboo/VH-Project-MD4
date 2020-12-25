import { LoginService } from '../login.service';
import { Products } from '../products';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  result!: Observable<any>;
  // token = new Observable<any>();
  // token!: Observable<string>;
  email = '';
  password = '';

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.getToken();
  }

  getToken() {
    this.loginService.login(this.email, this.password).subscribe(
      data => {
        this.result = data;
        console.log(data);
      },
      error => console.log(error));
  }

}