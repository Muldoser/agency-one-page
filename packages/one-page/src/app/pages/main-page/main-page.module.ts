import { NgModule } from '@angular/core';
import { AppMainPageComponent } from './main-page.component';
import { ComponentsModule } from '../../shared/components/components.module';

const components = [
  AppMainPageComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    ComponentsModule
  ]
})
export class AppMainPageModule {}
