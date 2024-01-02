import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { DemoComponentComponent } from "./demo-component/demo-component.component";

const appRoutes : Routes = [

    { path: '', redirectTo: '/app', pathMatch: 'full'},
    { path: 'app', component: AppComponent},
    { path: 'demo', component: DemoComponentComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}