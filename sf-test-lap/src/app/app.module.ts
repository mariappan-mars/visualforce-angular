import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LocationStrategy } from '@angular/common';
import { SalesforceHashLocationStrategy } from './shared/classes/sf-path-location-strategy'

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: SalesforceHashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
