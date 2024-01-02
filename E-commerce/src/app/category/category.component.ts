import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from './category.service';
import { Category } from './category.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categories: Category[] = [];

  displayedColumns: string[] = ['categoryId', 'categoryName', 'categoryStatus'];
  dataSource: MatTableDataSource<Category>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private dialog: MatDialog
    ){
    this.dataSource = new MatTableDataSource<Category>([]);
  }
  
  ngOnInit(): void {
    this.categoryService.fetchAll().subscribe((result: any) => {
      this.categories = result.data;
      this.dataSource = new MatTableDataSource<Category>(this.categories);
      this.dataSource.paginator = this.paginator;
    });
  }

  openDialog(): void {
    // Swal.fire('Success!', 'Your operation was successful!', 'question');
    // return;
    const dialogRef = this.dialog.open(CategoryEditComponent, {
      data: { mode: 'add' },
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onUpdate(category: Category) {
    //console.log('Update category:', category);
    const dialogRef = this.dialog.open(CategoryEditComponent, {
      data: { mode: 'update', category },
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onDelete(category: Category) {
    this.categoryService.changeStatus(category.categoryId).subscribe((result : any) =>{
      console.log(result);
      window.location.reload();
    });
  }
}
