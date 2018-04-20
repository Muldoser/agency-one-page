import { NgModule } from '@angular/core';
import { AppNavigationModule } from './navigation/navigation.module';

const modules = [
  AppNavigationModule
];

@NgModule({
  exports: [...modules],
  imports: [...modules]
})
export class ComponentsModule {}
