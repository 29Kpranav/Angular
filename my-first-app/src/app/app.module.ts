import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // import for ngmodel  -->feature understood by ts
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';    // import to use with app cmponent
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipe.service';
import { AdminComponent } from './admin/admin.component';
import { AdminItemComponent } from './admin/admin-item/admin-item.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,    // add here as well 
    HeaderComponent,
    RecipeListComponent,
    RecipesComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    AdminComponent,
    AdminItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,   // feature understood by js
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService, RecipeService],     //to access from recipe
  bootstrap: [AppComponent]
})
export class AppModule {}
