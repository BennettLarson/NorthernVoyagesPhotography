import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { PortraitsComponent } from './portraits/portraits.component';
import { AboutComponent } from './about/about.component';
import { WeddingComponent } from './wedding/wedding.component';
import { ContactComponent } from './contact/contact.component';
import { SeniorsComponent } from './portraits/seniors/seniors.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'wedding',
    component: WeddingComponent
  },
  {
    path: 'portraits',
    component: PortraitsComponent
  },
  {
    path: 'portraits/seniors',
    component: SeniorsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
