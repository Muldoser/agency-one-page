import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { appRoutes } from './app.routes';

import { ComponentsModule } from './shared/components/components.module';
import { AppMainPageModule } from './pages/main-page/main-page.module';
import { AppContainerModule } from './container/container.module';

const modules = [
  AppContainerModule,
  AppMainPageModule,
  ComponentsModule
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  entryComponents: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([...appRoutes]),
    ...modules
  ],
  providers: []
})
export class AppModule { }
