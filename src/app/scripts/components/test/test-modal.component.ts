import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './test-modal.component.html'
})
export class TestModalComponent implements OnInit {
  modalObj:any = {};

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    
  }

  dismiss(){
    this.activeModal.dismiss(this.modalObj);
  }

  close(){
    this.activeModal.close(this.modalObj);

  }
}
