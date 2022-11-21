import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsheaderComponent } from './component/newsheader/newsheader.component';
import { NewshomeComponent } from './component/newshome/newshome.component';
import { NewsresultComponent } from './component/newsresult/newsresult.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsfilterComponent } from './component/newsfilter/newsfilter.component';
import { Newsresult2Component } from './component/newsresult2/newsresult2.component';
import { FormsModule } from '@angular/forms';

// material 
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { NewsloaderComponent } from './component/newsloader/newsloader.component';




@NgModule({
  declarations: [
    AppComponent,
    NewsheaderComponent,
    NewshomeComponent,
    NewsresultComponent,
    NewsfilterComponent,
    Newsresult2Component,
    NewsloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatExpansionModule,
    MatCardModule
  ],
  exports:[
    MatDialogModule,
    MatExpansionModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
