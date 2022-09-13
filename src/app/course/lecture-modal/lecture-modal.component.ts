import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ILecture } from '../interface';
@Component({
  selector: 'app-lecture-modal',
  templateUrl: './lecture-modal.html'
})
export class LectureModalComponent implements OnInit {
  @Input() lecture: ILecture;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}
}
