import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SharedService } from '../shared/shared.service';
import { AppState } from '../store/app.state';
import { LoginService } from './login.service';
import * as LoginActions from '../store/actions/login.actions';
import { FormBuilder, Validators } from '@angular/forms';
import { localStorageSync } from 'ngrx-store-localstorage';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  usersList: any;
  emailNotFound: boolean = false;
  constructor(private loginService: LoginService, private router: Router, private sharedService: SharedService, private store: Store<AppState>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
    this.loginService.getusersList()
      .subscribe((response: any) => {
        if (response) {
          this.usersList = response;
        }
        else {
          alert("Data is not Fetched Properly");
        }
      });
  }

  // When clicked the login button
  login() {
    let userMatched = false;
    // Assuming the data is always small
    this.usersList.find((data: any) => {
      if (data.email == this.loginForm.value.email) {
        this.sharedService.setUserDetails(data);
        userMatched = true;
        // this.store.dispatch(new LoginActions.AddLoginDetails({ ...data }));
        this.emailNotFound = false;
        this.router.navigate(['/app/todo']);
      }
    });
    if (!userMatched) {
      this.emailNotFound = true;
    }
  }
}