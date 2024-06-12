import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage/homepage.component';
import { ContactpageComponent } from './components/contactpage/contactpage.component';
import { AboutuspageComponent } from './components/aboutuspage/aboutuspage.component';

const routes: Routes = [
  {path:'',component: HomepageComponent},
  {path:'Contact',component: ContactpageComponent},
  {path:'AboutUs',component: AboutuspageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
