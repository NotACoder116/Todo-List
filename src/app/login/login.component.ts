import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usersList: any;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginService.getusersList().subscribe((response: any)=> {
      if (response) {
        this.usersList = response;
        console.log(this.usersList)
      }
    });
  }
 
  login(email: HTMLInputElement) { 
    console.log("sdsd"+email.value );
    this.usersList.find((data: any)=> {
        if(data.email == email.value) {
          console.log("true")
          this.router.navigate(['/app/todo'])
        }
    })

  }
}
