import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AjouterReclamationComponent } from './ajouter-reclamation/ajouter-reclamation.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComplaintComponent } from './list-complaint/list-complaint.component';

@NgModule({
  declarations: [AppComponent, AjouterReclamationComponent, ListComplaintComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
