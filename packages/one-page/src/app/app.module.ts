import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { appRoutes } from "./app.routes";
import { AppContainerModule } from "./container/container.module";
import { NxWelcomeComponent } from "./nx-welcome.component";
import { AppMainPageModule } from "./pages/main-page/main-page.module";
import { ComponentsModule } from "./shared/components/components.module";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    AppContainerModule,
    AppMainPageModule,
    BrowserModule,
    ComponentsModule,
    RouterModule.forRoot([...appRoutes]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
