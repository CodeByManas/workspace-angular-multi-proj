import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ByNameComponent } from './component/by-name/by-name.component';
import { ByName2Component } from './component/by-name2/by-name2.component';
import { FoodcartComponent } from './component/foodcart/foodcart.component';
import { FoodhomeComponent } from './component/foodhome/foodhome.component';
import { FoodloginComponent } from './component/foodlogin/foodlogin.component';
import { FoodregisterComponent } from './component/foodregister/foodregister.component';
import { FoodserviceComponent } from './component/foodservice/foodservice.component';
import { MyAPIComponent } from './component/my-api/my-api.component';
import { RenderpageComponent } from './component/renderpage/renderpage.component';

const routes: Routes = [
  {path:'home', component: FoodhomeComponent},
  {path:'', redirectTo:'/home' , pathMatch:'full'},
  {path:'cart', component:FoodcartComponent},
  {path:'service', component:FoodserviceComponent},
  {path:'login', component:FoodloginComponent},
  {path:'register', component:FoodregisterComponent},
  {path:'renderpage', component:RenderpageComponent},
  {path:'byname' , component:ByNameComponent},
  {path:'byname2', component:ByName2Component},
  {path:'api', component:MyAPIComponent},
  {path:'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
