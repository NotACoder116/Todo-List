import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { LoginReducer } from './store/reducers/login.reducer';
// const reducerKeys = ['login'];
// export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
//    return localStorageSync({keys: reducerKeys})(reducer)
// }  
// const metaReducers: Array<any> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LoginModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      login: LoginReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
