import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { UnKnownComponentComponent } from "./un-known-component/un-known-component.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivaeGuard } from "./about/can-deactivate-guard.service";
import { DataResolver } from "./contact/contact-resolver.service";
 
const routes: Routes = [                             //
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent, 
  children:[
    { path: ':id/:name',
     //canActivate: [AuthGuard],          // protecting individual route
     canActivateChild: [AuthGuard],       // protecting sets of child routes within a parent route
     component: AboutComponent, canDeactivate: [CanDeactivaeGuard]}           // setting up (nested) child routes
  ] },
  { path: 'contact', component: ContactComponent, resolve: { resolvedData: DataResolver }},   //data - resolver
  { path: 'contact/:id/edit', component: ContactComponent},   // passing parameters to routes
  {path: 'not-found', component: UnKnownComponentComponent, data: {message: 'Page not found !'}} , // <!--passing static error essage with data property-->
  {path: '**', redirectTo : '/not-found'}
];

@NgModule({
 imports: [
 RouterModule.forRoot(routes, {useHash: true})    //below..
 ],
 exports: [RouterModule]
})
export class AppRoutingModule{
}

/*
{useHash: true}

The purpose of using hash-based routing in AngularJS is primarily for compatibility with older browsers that might not support 
the HTML5 History API, which allows for cleaner URLs without hash symbols. Hash-based routing uses the fragment identifier 
(the part of the URL after the # symbol) to manage application state and navigation.

Browser Compatibility
Server Configuration
Simplicity in Deployment
*/ 