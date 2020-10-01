import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/module/material/material.module';
import { DisplayOrdersComponent } from './modules/order-management/components/display-orders/display-orders.component';
import { OrderDetailsComponent } from './modules/order-management/components/order-details/order-details.component';
import { HeaderComponent } from './core/components/header/header.component';
import { ErrorInterceptor } from './core/services/error-interceptor/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DisplayOrdersComponent,
    OrderDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
