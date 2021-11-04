import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { Sezione1Component } from './components/sezione1/sezione1.component';
import { Sezione2Component } from './components/sezione2/sezione2.component';
import { Sezione3Component } from './components/sezione3/sezione3.component';
import { Sezione2TypeComponent } from './components/sezione2/sezione2-type/sezione2-type.component';
import { ApiListComponent } from './components/api-list/api-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    Sezione1Component,
    Sezione2Component,
    Sezione3Component,
    Sezione2TypeComponent,
    ApiListComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
