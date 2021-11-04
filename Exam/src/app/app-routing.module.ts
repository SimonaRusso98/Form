import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Sezione1Component } from './components/sezione1/sezione1.component';
import { Sezione2Component } from './components/sezione2/sezione2.component';
import { Sezione3Component } from './components/sezione3/sezione3.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { Sezione2TypeComponent } from './components/sezione2/sezione2-type/sezione2-type.component';
import { ApiListComponent } from './components/api-list/api-list.component';

const routes: Routes = [

  {path: 'sezione1', component: Sezione1Component},
  {path: 'sezione2', component: Sezione2Component},
  {path:'footer', component: FooterComponent},
  {path: 'sezione3', component: Sezione3Component},
  {path: 'home', component: HomeComponent},
  {path: 'api-list', component: ApiListComponent},
  {
    path: 'sezione2',
     component: Sezione2Component,
     children: [
       {path:'sezione2-type', component: Sezione2TypeComponent}
     ]
    },
    
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  NavbarComponent, HomeComponent,
  FooterComponent, Sezione1Component, Sezione2Component,
  Sezione3Component, ApiListComponent
]
