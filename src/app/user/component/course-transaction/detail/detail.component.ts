import { AuthService } from './../../../../shared/services/auth.service';
import { TransactionService } from './../../../../transactions/services/transaction.service';
import { ActivatedRoute, Route } from '@angular/router';
import { ITransaction } from './../../../../transactions/interface';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './detail.html'
})
export class CourseTransactionDetailComponent implements OnInit {
  public transaction: ITransaction;
  public transactionId: string;
  public tutorId: string;
  public config: any;
  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService,
    private authService: AuthService
  ) {
    this.config = this.route.snapshot.data['appConfig'];
  }
  ngOnInit() {
    this.transactionId = this.route.snapshot.paramMap.get('id');
    this.authService.getCurrentUser().then(resp => {
      this.tutorId = resp._id;
      this.transactionService.findOneTransactionCourse(this.tutorId, this.transactionId).then(resp => {
        this.transaction = resp.data;
      });
    });
  }
}
