import { NgModule } from '@angular/core';
import { AppNavigationComponent } from './navigation.component';

const components = [AppNavigationComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
})
export class AppNavigationModule {}
