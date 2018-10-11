import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products',        component: ProductsComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
	
];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
	  
  ],
  imports: [
    BrowserModule,
	   RouterModule.forRoot(appRoutes),
	  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


