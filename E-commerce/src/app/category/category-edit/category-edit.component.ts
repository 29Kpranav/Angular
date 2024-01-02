import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiResponse } from 'src/app/common-model/api-response';
import { Category } from '../category.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService,
    private route: ActivatedRoute,private dialogRef: MatDialog,private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { mode: string, category?: Category },
              private router: Router) { }
  formGroup !: FormGroup;

  ngOnInit(): void {

    if (this.data.mode === 'update' && this.data.category) {
      
      this.formGroup = this.formBuilder.group({
        categoryId: [this.data.category.categoryId],
        categoryName: [this.data.category.categoryName],
        categoryStatus: [String(this.data.category.categoryStatus)]
      });
    } else {
      
      this.formGroup = this.formBuilder.group({
        categoryId: 0,
        categoryName: [''],
        categoryStatus: [''],
      });
    }
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      const formData = this.formGroup.value;

      if (this.data.mode === 'update') {
        this.categoryService.updateCategory(formData).subscribe(
          (response: any) => {
            console.log('Form data updated successfully:', response);
            if (response.httpStatusCode === 200) {
              // Success case
              this.showSnackbar(response.data, 'success-snackbar');
              this.dialogRef.closeAll();
              setTimeout(() => {
                window.location.reload();
              }, 2000);
            } else {
              // Handle other HTTP status codes if needed
            }
          },
          (error) => {
            console.error('Error updating form data:', error);
          }
        );
      }else{
      this.categoryService.submitFormData(formData).subscribe(
        (response: any) => {
          console.log('Form data submitted successfully:', response);
          if (response.httpStatusCode === 200) {
            // Check if the message contains information about duplicate keys
            if (response.data && response.data.toLowerCase().includes('duplicate')) {
              // Duplicate entry case
              this.showSnackbar(response.data, 'error-snackbar');
            } else {
              // Success case
              this.showSnackbar(response.message, 'success-snackbar');
              this.dialogRef.closeAll();
              setTimeout(() => {
                window.location.reload();
              }, 2000);
            }
          } else {
            // Handle other HTTP status codes if needed
          }
        },
        (error) => {
          console.error('Error submitting form data:', error);
        }
      );
      }
    } else {
      console.log('Form is invalid. Please check the inputs.');
    }
  }
  
  
  
  private showSnackbar(message: string, panelClass: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: [panelClass]
    });
  }
  
  
  

  onCancel() {
    this.dialogRef.closeAll();
  }

}
