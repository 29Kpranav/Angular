import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { UnKnownComponentComponent } from './un-known-component/un-known-component.component';            
import { AppRoutingModule } from './app-routing.module';  //
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivaeGuard } from './about/can-deactivate-guard.service';
import { UserService } from './user.service';

@NgModule({
  declarations: [    // Lists the components, directives, and pipes that belong to this module
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UnKnownComponentComponent
  ],
  imports: [              // Specifies other modules that this module depends on
    BrowserModule,
    AppRoutingModule      // outsourcing route configuration
  ],
  providers: [AuthService, AuthGuard, CanDeactivaeGuard, UserService], // Defines the services provided at the module level
  bootstrap: [AppComponent],                              // Specifies the root component to be bootstrapped when the module is loaded
  exports: [RouterModule]                                 //  Lists the components, directives, and pipes that are available for use in other modules.
})
export class AppModule { }
