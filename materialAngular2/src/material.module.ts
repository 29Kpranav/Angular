import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode, MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
 

@NgModule({
    exports:[
       MatInputModule,
       MatSelectModule,
       MatExpansionModule,
       MatIconModule,
       MatGridListModule,
       MatMenuModule,
       MatButtonModule,
       MatPaginatorModule,
       MatRadioModule,
       MatCardModule,
       FormsModule,
       MatSliderModule,
       MatProgressBarModule,
       MatProgressSpinnerModule
    ]
})
export class MaterialModule{

}