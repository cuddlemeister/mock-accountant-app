import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelperService } from '../../_services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.scss']
})
export class CreateApplicationComponent {
  applicationForm: FormGroup;
  errorState: string;
  isLoading = false;
  currentDate = new Date().toLocaleDateString();
  editField: string;
  data: Array<{
    type: string
    sum_no_VAT: number
    tax_code: string
    description: string,
    invalid: boolean
  }> = [];

  constructor(
    private _fb: FormBuilder,
    private hs: HelperService,
    private router: Router
  ) {
    this.add();
    this.applicationForm = this._fb.group({
      supplier: ['ПАТ "Київстар"', Validators.required],
      accounting_date: [new Date(), Validators.required],
      invoice_date: [, Validators.required],
      sum_with_VAT: [null, Validators.required],
      currency: 'UAH',
      description: [null, Validators.required],
    })
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.value;
    this.data[id][property] = editField;
  }

  remove(id: any) {
    this.data.splice(id, 1);
  }

  add() {
    this.data.push({
      type: 'position',
      sum_no_VAT: null,
      tax_code: '20',
      description: '',
      invalid: false,
    });
  }

  copy(id) {
    this.data.push(Object.assign({}, this.data[id]))
  }

  checkValidity(): boolean {
    const invalid = this.data.reduce((acc, el, index) => {
      if (isNaN(el.sum_no_VAT) || !el.description) {
        this.data[index].invalid = true;
        return true
      }
      this.data[index].invalid = false;
    }, false);
    if (invalid) {
      this.errorState = 'INVALID_ROW'
      return false;
    }
    const sumByRows = this.data.reduce((sum, el) => Number(el.sum_no_VAT) + sum, 0);
    if (sumByRows !== this.applicationForm.value.sum_with_VAT) {
      this.errorState = 'INVALID_SUM'
      return false;
    }
    this.errorState = 'OK';
    return true
  }

  sendForm() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.errorState = null;
      this.hs.openSnackBar('Заявка успешно отправлена');
      this.applicationForm.reset();
      this.data = [];
    }, 2000);
  }

}


export interface Application {
  supplier: string;
  accounting_date: Date;
  invoice_date: Date;
  sum_with_VAT: number;
  currency: 'UAH' | 'USD'
  description: string;
  rows: Array<{
    type: 'position' | 'VAT',
    sum_no_VAT: number
    tax_code: '20' | '0'
    description: string;
  }>
}