import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {TestModalComponent} from './test-modal.component';
import { Transition } from '@uirouter/core';
import { HttpService } from './../../services/http.service';

@Component({
  templateUrl: './/test.component.html'
})
export class TestComponent implements OnInit {
  //closeResult: string;
  //@Input() stateParams: StateParams;
  //@Input() trans: Transition;
  constructor(private modalService: NgbModal,private trans: Transition, private httpService: HttpService) { 
    
  }

  ngOnInit() {
    const params = this.trans.params();
    console.log(params);
    //console.log(this.stateParams);
    //console.log(this.trans);
  }

  openModel(){
    /*this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }*/
    try{
      /*const modalRef = this.modalService.open(TestModalComponent).result.then((result) => {
      //this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    }).catch((e) => {
      console.log(e);
    });
    const modalRef1 = this.modalService.open(TestModalComponent);
    modalRef1.componentInstance.name = 'World';*/
    const modalRef = this.modalService.open(TestModalComponent);
    modalRef.componentInstance.modalObj.name = 'World';
    /*modalRef.result.then((result) => {
      //this.closeResult = `Closed with: ${result}`;
      console.log(result);
     });
     modalRef.result.then(function(modalData) {
      console.log(modalData);
    }*/
    modalRef.result.then((result) => {
      console.log(result);
    });
  
     
    }catch(e){
      console.log(e);
    }
  }
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

    download(){
      let value = {test:"test"};
      this.httpService.downloadFile(value).subscribe((response) => {
       let fileName = "test.xls";
        let downloadLink = document.createElement("a");
		            	let file = new Blob([response], {type: "arraybuffer"});
		            	var fileURL = URL.createObjectURL(file);
		            	downloadLink.href = fileURL;
		            	downloadLink.download = fileName;
		            	document.body.appendChild(downloadLink);
		            	if (window.navigator && window.navigator.msSaveOrOpenBlob) { 
			            	window.navigator.msSaveOrOpenBlob(file, fileName); 
			            } else { 
			            	downloadLink.click();
			            }
		            	document.body.removeChild(downloadLink);
      })
    }
}
