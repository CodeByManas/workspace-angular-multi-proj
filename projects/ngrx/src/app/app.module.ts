import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { CounterButtonsComponent } from './components/counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import {counterReducer} from '../app/components/state/counter.reducer';
import { CustomdataComponent } from './components/customdata/customdata.component';
import { FormsModule } from '@angular/forms';
import { NgrxhomeComponent } from './components/ngrxhome/ngrxhome.component';
import { NgrxheaderComponent } from './components/ngrxheader/ngrxheader.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { PostComponent } from './postmodule/post/post.component';
import { postReducer } from './postmodule/state/post.reducer';
import { parentReducer } from './parentState/parent.state';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomdataComponent,
    NgrxhomeComponent,
    NgrxheaderComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // StoreModule.forRoot({counter : counterReducer, post: postReducer}),
    StoreModule.forRoot(parentReducer),
    StoreDevtoolsModule.instrument({
      // maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
