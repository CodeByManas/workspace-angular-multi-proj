import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { ResultComponent } from './component/result/result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Result2Component } from './component/result2/result2.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ResultComponent,
    Result2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxQRCodeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
