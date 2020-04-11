import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { HomeListComponent } from './home-list/home-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqNu60hFgu1cEwy9M4nuTdpWjdcQC6VDc',
      libraries: ['places','geometry'],
      
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
