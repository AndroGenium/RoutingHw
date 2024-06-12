import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage/homepage.component';
import { ContactpageComponent } from './components/contactpage/contactpage.component';
import { AboutuspageComponent } from './components/aboutuspage/aboutuspage.component';
import { PortalComponent } from './components/portal/portal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactpageComponent,
    AboutuspageComponent,
    PortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
