import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoryComponent } from "./category/category.component";
import { ItemComponent } from "./item/item.component";
import { HeaderComponent } from "./header/header.component";
import { CategoryEditComponent } from "./category/category-edit/category-edit.component";
import { ItemEditComponent } from "./item/item-edit/item-edit.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./auth.guard";


const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  { path: 'header', component: HeaderComponent, canActivate: [AuthGuard]},
  { path: 'category', component: CategoryComponent, children:[
    {path:'edit', component: CategoryEditComponent}
  ] },
  { path: 'item', component: ItemComponent, children:[
    {path: 'edit', component: ItemEditComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{
}