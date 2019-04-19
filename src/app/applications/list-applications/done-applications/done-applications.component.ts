import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-done-applications',
  templateUrl: './done-applications.component.html',
  styleUrls: ['./done-applications.component.scss']
})
export class DoneApplicationsComponent implements OnInit, OnChanges {
  @Input('applications') applications: Array<any> = [];
  displayedColumns: string[] = ['supplier', 'date', 'sum_with_VAT', 'actions'];
  perPage = 15;
  pageSizeOptions = [5, 10, 20, 50, 100];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.paginator._intl.itemsPerPageLabel = 'Элементов на странице'
  }

  ngOnChanges(changes) {
    console.log(changes);
  }

  meow() {
    console.log(this.applications);
  }

}
