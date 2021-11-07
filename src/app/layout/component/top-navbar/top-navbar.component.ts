import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SharedService } from 'src/app/shared/shared.service';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {
  currentCounter: number = 0;
  userDetails: any = {};
  constructor(private sharedService: SharedService, private store: Store<AppState>, private route: Router) { }

  ngOnInit(): void {
    this.sharedService._returnCounter.subscribe((data) => {
      this.currentCounter = data;
    })

    // this.store.select('login').subscribe((data: any) => {
    //   this.userDetails = data[0];
    // })
    this.sharedService._userDetails.subscribe((response) => {
      if (Object.keys(response).length) {
        this.userDetails = response;
      }
      else {
        this.route.navigate(['/login']);
      }
    })
  }

  // If http:// or https:// is appended in the url them this code will also add the same
  navigateToWebsite(urlToOpen: any) {
    let url: string = '';
    if (!/^http[s]?:\/\//.test(urlToOpen)) {
        url += 'http://';
    }

    url += urlToOpen;
    window.open(url, "_blank");
  }

  logout() {
    this.sharedService.logoutUser();
    this.route.navigate(['/login']);
  }
}
