import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';
import { ISection } from '../../../../course/interface';
import { pick } from 'lodash';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-section-form',
  templateUrl: './section-form.html'
})
export class SectionFormComponent implements OnInit {
  @Input() section: ISection = {};
  public submitted: boolean = false;

  constructor(private toasty: ToastrService, public activeModal: NgbActiveModal, private translate: TranslateService) {}

  ngOnInit() {}

  submit(frm: any) {
    this.submitted = true;
    if (!frm.valid || this.section.ordering < 0) {
      return this.toasty.error(this.translate.instant('Please complete the required fields!'));
    }
    this.activeModal.close(pick(this.section, ['title', 'description', 'ordering']));
  }
}
