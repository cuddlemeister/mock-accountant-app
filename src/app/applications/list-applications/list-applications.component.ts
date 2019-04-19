import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { MatPaginator, MatSort } from '@angular/material';
import { Application } from '../create-application/create-application.component';
import { HelperService } from '../../_services/helper.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-list-applications',
  templateUrl: './list-applications.component.html',
  styleUrls: ['./list-applications.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListApplicationsComponent implements OnInit {
  isLoading = false;
  applications: Array<Application> = DEMO_APPLICATIONS;
  doneApplications = [];
  displayedColumns: string[] = ['select', 'supplier', 'date', 'sum_with_VAT', 'actions'];
  selection = new SelectionModel<object>(true, []);
  perPage = 15;
  pageSizeOptions = [5, 10, 20, 50, 100];
  expandedElement;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private hs: HelperService,
    private _cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.paginator._intl.itemsPerPageLabel = 'Элементов на странице'
  }

  done(element, del = false) {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      const toDelIndex = this.applications.findIndex(e => e.supplier === element.supplier);
      const spliced = this.applications.splice(toDelIndex, 1);
      this.applications = this.applications.concat([]);
      this.selection.clear();
      if (del) {
        this.hs.openSnackBar('Заявка отклонена');
      } else {
        this.doneApplications.push(...spliced);
        this.doneApplications = this.doneApplications.concat([])
        this.hs.openSnackBar('Заявка отмечена как выполненная');
      }
      this._cdr.detectChanges();
    }, 1000);
  }

  doneAll(del = false) {
    this.hs.openSnackBar(`Все заявки были ${del? 'отклонены': 'приняты успешно'}`)
    this.selection.clear();
  }

   /** Whether the number of selected elements matches the total number of rows. */
   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.applications.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.applications.forEach(row => this.selection.select(row));
    console.log('selected', this.applications);
  }


}


export const DEMO_APPLICATIONS: Array<Application> = [
  {
    supplier: 'Lanet',
    accounting_date: new Date(new Date().getTime() - 48 * 60 * 60 * 1000),
    invoice_date: new Date(),
    sum_with_VAT: 7246.40,
    currency: 'UAH',
    description: 'Оплата услуг интернета',
    rows: [
      {
        description: 'Описание услуги №1',
        sum_no_VAT: 1000,
        tax_code: '0',
        type: 'position',
      }
    ]
  },
  {
    supplier: 'Киевстар',
    accounting_date: new Date(new Date().getTime() - 72 * 60 * 60 * 1000),
    invoice_date: new Date(),
    sum_with_VAT: 4511.67,
    currency: 'UAH',
    description: 'Оплата услуг мобильной связи',
    rows: [
      {
        description: 'Описание услуги №2',
        sum_no_VAT: 1000,
        tax_code: '0',
        type: 'position',
      }
    ]
  }
]