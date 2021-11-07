# NexdewAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

NOTE: ngrx/store state is also handled by using reducers, actions, dispatcher, 
but that code is comented and state is properly handled by subjective behaviours.

Knowledge about the folders:
1. Login - Conatins all the details about the login page.
2. Layout - This folder basically creates the layout of the ui app structure.
          - After the login angular app will lands in the layout folder.
          - Now from layout.routing file, the path of the other files are listed.
          - Top navbar details are also listed in the layout files.
3. Posts - This folder contains all the details of posts folder.
4. Auth - This folder contains all the guards.
5. Todo - Contains all the details about the todo list(show, checkboxes etc.)
        - This folder is also the parent of the todo items folder.
6. Shared - Contains all the details that are used by the other components.       


Assumption:
1. User will not refresh the page after login, as discussed through the mail.
2. User can checked and unchecked lists data only when 'ALL' filter is selected.

THE BIG ASSUMPTIONS IS THAT, THIS APP IS EXPECTING THE HAPPY FLOW FROM THE API (means api will always gives us the data, without even a fail)