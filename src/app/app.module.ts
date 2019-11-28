import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { JSONTableModule } from 'angular-json-table';  // import the Module.

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    UsersComponent,
    ProductsComponent,
    ShoppingCartComponent,
   
  ],
  imports: [
    JSONTableModule, // Add the JSONTableModule
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
        {
          path: 'register',
          component:RegisterComponent
        },
        {
          path: '',
          component:HomeComponent
        },
        {
          path: "login",
          component: LoginComponent
        },
        {
          path: "shop",
          component: ProductsComponent
        },

        // otherwise redirect to home
        { path: '**', redirectTo: '' }
      ]
    )
  ],
  providers: [   {
          provide: LocationStrategy, useClass: HashLocationStrategy
      }],
  bootstrap: [AppComponent]
})
export class AppModule { }
