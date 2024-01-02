import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from './item.model';
import { ItemService } from './item.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ApiResponse } from '../common-model/api-response';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public items: Item[] = [];
  displayedColumns: string[] = ['itemId', 'categoryId', 'itemName', 'price', 'itemStatus'];
  dataSource: MatTableDataSource<Item>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<Item>([]);
  }

  ngOnInit(): void {
    this.itemService.fetchAll().subscribe((result: ApiResponse<Item[]>) => {
      if (result.httpStatusCode == 200) {
        this.items = result.data;
        this.dataSource = new MatTableDataSource(this.items);
        this.dataSource.paginator = this.paginator; // set paginator after updating data
      }
    });
  }
 
  openDialog(): void {
    const dialogRef = this.dialog.open(ItemEditComponent, {
      data: { mode: 'add' },
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onUpdate(item: Item) {
    //console.log('Update item:', item);
    const dialogRef = this.dialog.open(ItemEditComponent, {
      data: { mode: 'update', item },
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
    //  console.log('The dialog was closed');
    });
  }
  
  
  onDelete(item: Item) {
    this.itemService.changeStatus(item.itemId).subscribe((result : any) =>{
      console.log(result);
      window.location.reload();
    });
  }


}
