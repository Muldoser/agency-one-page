import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppMainPageComponent } from './main-page/main-page.component';
import { AppContainerModule } from './container/container.module';
import { AppMainPageModule } from './main-page/main-page.module';

const modules = [
  AppContainerModule,
  AppMainPageModule
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  entryComponents: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'app' },
      { path: 'app', component: AppMainPageComponent }
    ]),
    ...modules
  ],
  providers: []
})
export class AppModule { }
