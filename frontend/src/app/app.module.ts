import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { HomeListComponent } from './home-list/home-list.component';
import { HouseComponent } from './house/house.component';
import { HouseAddComponent } from './house-add/house-add.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { HouseEditComponent } from './house-edit/house-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
const appRoutes: Routes = [
  {
    path: 'houses',
    component: HouseComponent,
    data: { title: 'House List' }
  },
  {
    path: 'house-details/:id',
    component: HouseDetailComponent,
    data: { title: 'House Details' }
  },
  {
    path: 'house-add',
    component: HouseAddComponent,
    data: { title: 'House Add' }
  },
  {
    path: 'house-edit/:id',
    component: HouseEditComponent,
    data: { title: 'House Edit' }
  },
  { path: '',
    redirectTo: '/houses',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeListComponent,
    HouseComponent,
    HouseAddComponent,
    HouseDetailComponent,
    HouseEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
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
