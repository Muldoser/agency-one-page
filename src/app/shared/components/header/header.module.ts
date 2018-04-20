import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './header.component';

const components = [
  AppHeaderComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components]
})
export class AppHeaderModule {}
