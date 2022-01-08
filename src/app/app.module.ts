import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // Components, pipes and custom directives
    AppComponent,
  ],
  imports: [
    // Other modules
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    // Services and guards
  ],
  bootstrap: [
    // Component loaded at start of the application
    AppComponent,
  ],
})
export class AppModule {}
