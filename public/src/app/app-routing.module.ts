import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'elopement',
    component: GalleryComponent
  },
  {
    path: 'wedding',
    component: GalleryComponent

  },
  {
    path: 'couple1',
    component: GalleryComponent
  },
  {
    path: 'couple1',
    component: GalleryComponent
  },
  {
    path: 'couple2',
    component: GalleryComponent

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
