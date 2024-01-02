import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { StringinterpolationComponent } from './stringinterpolation/stringinterpolation/stringinterpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding/propertybinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding/stylebinding.component';
import { ClassbindingComponent } from './classbinding/classbinding/classbinding.component';
import { Eventbinding1Component } from './eventbinding1/eventbinding1/eventbinding1.component';
import { Eventbinding2Component } from './eventbinding2/eventbinding2/eventbinding2.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StringinterpolationComponent,
    PropertybindingComponent,
    StylebindingComponent,
    ClassbindingComponent,
    Eventbinding1Component,
    Eventbinding2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
