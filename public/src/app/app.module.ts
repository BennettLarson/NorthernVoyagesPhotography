import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortraitsComponent } from './portraits/portraits.component';
import { AboutComponent } from './about/about.component';
import { WeddingComponent } from './wedding/wedding.component';
import { ContactComponent } from './contact/contact.component';
import { SeniorsComponent } from './portraits/seniors/seniors.component';
import { ModalComponent } from './components/modal/modal.component';
import { GalleryImageComponent } from './components/gallery-image/gallery-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortraitsComponent,
    AboutComponent,
    WeddingComponent,
    ContactComponent,
    SeniorsComponent,
    ModalComponent,
    GalleryImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
