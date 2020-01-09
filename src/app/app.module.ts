import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoTestComponent } from './demo-test/demo-test.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeServiceService } from './employee-service.service';
import{HttpClientModule} from '@angular/common/http';
import { TreeComponent } from './tree/tree.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule,MatMenuModule} from  '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DemoTestComponent,
    TestComponentComponent,
    EmployeeListComponent,
    PageNotFoundComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
