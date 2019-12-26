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
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChangeProductImgComponent } from './change-product-img/change-product-img.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import { ChangeImgAdminComponent } from './change-img-admin/change-img-admin.component';






@NgModule({

  declarations: [
    AppComponent,
    AddProductComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    UsersComponent,
    NavigationBarComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ChangeProductImgComponent,
    ChangeProductImgComponent,

    AdminComponent,

    ChangeImgAdminComponent
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
        {
          path: 'register',
          component: RegisterComponent
        },
        {
          path: 'admin',
          component: AdminComponent
        },
        {
          path: '',
          component: HomeComponent
        },
        {
          path: "login",
          component: LoginComponent
        },
        {
          path: "users",
          component: UsersComponent
        },
        {
          path: "shop",
          component: ProductsComponent
        },

        {
          path: "cart",
          component: ShoppingCartComponent

        }, {
          path: "admin-img",
          component: ChangeImgAdminComponent

        },




        // otherwise redirect to home
        { path: '**', redirectTo: '' }
      ]
    ),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: LocationStrategy, useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
