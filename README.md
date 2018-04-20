# Agency - OnePage

This project started from a simple Bootstrap template, [Agency](https://github.com/BlackrockDigital/startbootstrap-agency), and was turned in to an Angular alternative.

## Package manager

In this project we use [yarn](https://yarnpkg.com/en/) to manage the node modules. If you rather use good 'ole [npm](https://www.npmjs.com/), you need to change some things in the package.json and use `npm install` instead of `yarn`. 

## Get started
 > This Angular project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

```shell
# Development server
# For a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
$ ng serve

# Code scaffolding
# To generate a new component.

$ ng generate component component-name
# You can also use
$ ng generate directive|pipe|service|class|guard|interface|enum|module

# Build
# To build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
$ ng build

# Running unit tests
# To execute the unit tests via Karma.
$ ng test

# Running end-to-end tests
# To execute the end-to-end tests via Protractor.
$ ng e2e 

# Further help
# To get more help on the Angular CLI use
$ ng help

```

### More info
* [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
* [Karma](https://karma-runner.github.io)
* [Protractor](http://www.protractortest.org/)

## Transformation

The original [Agency bootstrap template](https://startbootstrap.com/template-overviews/agency/) (github: https://github.com/BlackrockDigital/startbootstrap-agency) uses jQuery to make stuff interactive. So what has to be done _not_ to do this? To simplify the comparison I will refer to the original as **Agency** and this _Angularised_ version as **OnePage**.

### Packages
#### 1. Install required dependencies

The **Agency** `package.json` only contains 4 dependencies:

```json
  "dependencies": {
    "bootstrap": "4.0.0",
    "font-awesome": "4.7.0",
    "jquery": "3.3.1",
    "jquery.easing": "^1.4.1"
  }
```

Add these 4 to the existing dependencies in `package.json` of the **OnePage** and run `yarn` to install them. Since we are using [Angular Cli](https://cli.angular.io/), we don't need **Agency**'s `devDependencies` to build/serve our project, so we can ignore those.

#### 2. Install popper.js: `yarn add popper.js`

jQuery and/or bootstrap needs another dependency called `popper.js`, which we also need to install.

```shell
  $ yarn add popper.js
```

### HTML + Angular Component
#### 3. Create `AppMainPageComponent` component
#### 4. Copy `<body>` content into `src/app/main-page/main-page.component.html`
#### 5. Specify the right styleURLS in the component

For the HTML, we imported the important HTML from the original **Agency**'s `index.html`. This is everything inside the `body`.
We created a component in `src/app/main-page/main-page.component.ts` that looks like this:

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-main-page',
  styleUrls: [
    'main-page.component.scss',
    '../../scss/agency.scss',
    '../../../node_modules/bootstrap/scss/bootstrap.scss',
    '../../../node_modules/font-awesome/css/font-awesome.min.css'
  ],
  templateUrl: './main-page.component.html'
})
export class AppMainPageComponent {
}
```

We defined it in the `AppMainPageModule` and imported it into the `AppModule`. 

In the component above we import the necessary styles.

* `'main-page.component.scss',`: Is our personal **OnePage** stylesheet for this component.
* `'../../scss/agency.scss',`: Is the index stylesheet that imports all the right **Agency** styles for us.
* `'../../../node_modules/bootstrap/scss/bootstrap.scss',`: We need for **Agency**'s use of bootstrap.
* `'../../../node_modules/font-awesome/css/font-awesome.min.css'`: To be able to use the _font-awesome_ icon set.

### SCSS
#### 6. Copy `scss`into `src/`
Right now we won't quite get the right result. We specified the styles in our component, but we haven't added them to the project yet. We have to import the scss files from **Agency** to use the styles that have already been created. For this, we have placed the `scss` folder from **Agency** inside the `src` directory.

### Remaining setup

In our _app.module.ts_, we want to specify where to go.

#### 7. Add `AppMainPageComponent` to the main module and route there

To navigate to our new page component, we set up the angular router as follows:

```
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'app' },
      { path: 'app', component: AppMainPageComponent }
    ]),
    ...modules
  ],
```

Lastly, we need to include Bootstrap's JavaScript in our project. We do this in the `main.ts`, above our app-bootstrapping.

#### 8. Import bootstrap in **main.ts**

``` typescript
import 'bootstrap';
```


#### Done

This should get your new angular-bootstrap-template going! If these steps don't work out or something's missing, let me know and I'll update the steps.

#### Note:
Other templates might include different packages and other setups that might require more attention.


## Next steps

This is an initial transformation from the Template to an Angular project, so some other stuff can be done to make this project better. Following items might be nice to implement next: 

* Split the `AppMainPageComponent` into smaller components (header, footer, navbar...).
* Extract the styles from the _src/scss_ into the split components.
* Recreate the custom js actions from **Agency**, preferably without jQuery (e.g. smooth scrolling).
* Check if we can do without the `jquery.easing` package.
* Write some tests maybe.
