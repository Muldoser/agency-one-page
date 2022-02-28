import { NgModule } from '@angular/core';
import { AppNavigationModule } from './navigation/navigation.module';
import { AppHeaderModule } from './header/header.module';
import { AppFooterModule } from './footer/footer.module';

const modules = [AppNavigationModule, AppHeaderModule, AppFooterModule];

@NgModule({
  exports: [...modules],
  imports: [...modules],
})
export class ComponentsModule {}
