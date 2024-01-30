import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './Components/about/about.component';
import { ServicesComponent } from './Components/services/services.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { OurteamComponent } from './Components/ourteam/ourteam.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path: '',
  component: HomeComponent,
  title: 'Home Page',
 },
  {path:'about', component: AboutComponent,title:'About Page'},
  {path:'services', component: ServicesComponent,title:'Services Page'},
  {path:'projects', component: ProjectsComponent,title:'Project Page'},
  {path:'ourteam', component: OurteamComponent,title:'Ourteam Page'},
  {path:'contact', component: ContactComponent,title:'Contact Page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
