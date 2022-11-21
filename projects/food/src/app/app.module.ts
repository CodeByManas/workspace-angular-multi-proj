import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodhomeComponent } from './component/foodhome/foodhome.component';
import { FoodcartComponent } from './component/foodcart/foodcart.component';
import { FoodserviceComponent } from './component/foodservice/foodservice.component';
import { FoodloginComponent } from './component/foodlogin/foodlogin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


// for material 
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FoodregisterComponent } from './component/foodregister/foodregister.component';
import {MatMenuModule} from '@angular/material/menu';
import { FilterComponent } from './component/filter/filter.component';
import { SrchnavbarComponent } from './component/srchnavbar/srchnavbar.component';
import { RenderpageComponent } from './component/renderpage/renderpage.component';
import { Renderpage2Component } from './component/renderpage2/renderpage2.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ByNameComponent } from './component/by-name/by-name.component';
import { ByName2Component } from './component/by-name2/by-name2.component';
import { MyAPIComponent } from './component/my-api/my-api.component';
import { AboutComponent } from './component/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    FoodhomeComponent,
    FoodcartComponent,
    FoodserviceComponent,
    FoodloginComponent,
    FoodregisterComponent,
    FilterComponent,
    SrchnavbarComponent,
    RenderpageComponent,
    Renderpage2Component,
    ByNameComponent,
    ByName2Component,
    MyAPIComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,



    // material 
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule
  ],
  exports:[
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
