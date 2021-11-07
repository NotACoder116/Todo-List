import { Action } from "@ngrx/store";
import { Login } from "../models/login.model";

export const ADD_LOGIN_DETAILS = '[Login] Add';

export class AddLoginDetails implements Action {
    readonly type: any = ADD_LOGIN_DETAILS;

    constructor(public payload: Login){}
}

export type Actions = AddLoginDetails;