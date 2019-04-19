import { Component, OnInit } from '@angular/core';
import { DEMO_APPLICATIONS } from '../list-applications/list-applications.component';
import { Application } from '../create-application/create-application.component';
import { HelperService } from '../../_services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-one-application',
  templateUrl: './view-one-application.component.html',
  styleUrls: ['./view-one-application.component.scss']
})
export class ViewOneApplicationComponent implements OnInit {
  application: Application = DEMO_APPLICATIONS[0];
  isLoading = false;
  constructor(
    private hs: HelperService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  done(del = false) {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      if (del) {
        this.hs.openSnackBar('Заявка отклонена');
      } else {
        this.hs.openSnackBar('Заявка отмечена как выполненная');
      }
      this.router.navigate(['/list-applications'])
    }, 1000);
  }


}