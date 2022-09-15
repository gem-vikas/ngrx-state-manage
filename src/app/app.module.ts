import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { OutputComponent } from './counter/output/output.component';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { CustomCounterInputComponent } from './counter/custom-counter-input/custom-counter-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { PostlistComponent } from './post/postlist/postlist.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AddPostComponent } from './post/add-post/add-post.component';
import { appReducer } from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    OutputComponent,
    CounterButtonComponent,
    CustomCounterInputComponent,
    HomeComponent,
    HeaderComponent,
    PostlistComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
