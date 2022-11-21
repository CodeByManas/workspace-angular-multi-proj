import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsfilterComponent } from './component/newsfilter/newsfilter.component';
import { NewshomeComponent } from './component/newshome/newshome.component';
import { NewsloaderComponent } from './component/newsloader/newsloader.component';
import { NewsresultComponent } from './component/newsresult/newsresult.component';
import { Newsresult2Component } from './component/newsresult2/newsresult2.component';

const routes: Routes = [
  { path:'home', component:NewshomeComponent},
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'result', component:NewsresultComponent},
  {path:'result2', component:Newsresult2Component},
  {path:'filter', component:NewsfilterComponent},
  {path:'loader', component:NewsloaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
