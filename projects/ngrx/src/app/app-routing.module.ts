import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { NgrxhomeComponent } from './components/ngrxhome/ngrxhome.component';
import { PostComponent } from './postmodule/post/post.component';

const routes: Routes = [
  {path:'home', component:NgrxhomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'counter', component:CounterComponent},
  {path:'post', component:PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
