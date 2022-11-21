import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { ResultComponent } from './component/result/result.component';
import { Result2Component } from './component/result2/result2.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'', redirectTo:'/register', pathMatch:'full'},
  {path:'result', component:ResultComponent},
  {path:'result2', component:Result2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
