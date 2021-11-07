import { Login } from "../models/login.model";
import * as LoginActions from "../actions/login.actions";

export function LoginReducer(state: Login[] = [], action: LoginActions.Actions | any) {
    switch (action.type) {
        case LoginActions.ADD_LOGIN_DETAILS:
            return [...state, action.payload];
        default:
            return state;
    }
}