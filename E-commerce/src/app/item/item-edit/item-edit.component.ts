import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemService } from '../item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private itemService: ItemService,private dialogRef: MatDialog,
    private route: ActivatedRoute,private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { mode: string, item?: Item },
    private router: Router) { }
  formGroup !: FormGroup;
  
  ngOnInit(): void {

    if (this.data.mode === 'update' && this.data.item) {
     
      this.formGroup = this.formBuilder.group({
        itemId: [this.data.item.itemId],
        categoryId: [this.data.item.categoryId],
        itemName: [this.data.item.itemName],
        price: [this.data.item.price],
        itemStatus: [String(this.data.item.itemStatus)]
      });

      
    } else {
      
      this.formGroup = this.formBuilder.group({
        itemId: 0,
        categoryId: [''],
        itemName: [''],
        price: [''],
        itemStatus: ['']
      });
    }
    this.loadCategories();
  }

  categories: any[] = [];

  onSubmit(): void {
    if (this.formGroup.valid) {
      const formData = this.formGroup.value;

      if (this.data.mode === 'update') {
        this.itemService.updateItem(formData).subscribe(
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
      this.itemService.submitFormData(formData).subscribe(
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

  loadCategories() {
    this.itemService.fetchAllC().subscribe(
      (result) => {
        if (result.httpStatusCode === 200) {
          this.categories = result.data;
        }
      },
      (error) => {
        console.error('Error loading categories:', error);
      }
    );
  }
  
}
