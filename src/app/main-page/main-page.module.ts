import { NgModule } from '@angular/core';
import { AppMainPageComponent } from './main-page.component';

const components = [
  AppMainPageComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components]
})
export class AppMainPageModule {}
