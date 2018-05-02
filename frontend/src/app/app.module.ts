import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { ApiClientModule } from './api/client/api-client.module';
import { AppComponent } from './app.component';
import { PropertyComponent } from './components/property/property.component';
import { PropertiesComponent } from './components/properties/properties.component';

const appRoutes: Routes = [
  {path:'', component:PropertiesComponent},
  {path:'properties/:id', component:PropertyComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    PropertiesComponent
  ],
  imports: [
    BrowserModule,
    ApiClientModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
