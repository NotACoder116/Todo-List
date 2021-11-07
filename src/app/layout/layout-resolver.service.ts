import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutResolverService implements Resolve<Object> {

  constructor(private sharedService: SharedService) { }

  resolve(): Observable<Object> | Observable<never> {
    return this.sharedService._userDetails;
  }
}