import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './upload.component.html'
})
export class UploadComponent implements OnInit {

  upload:any = {}; 

  @ViewChild('fileInput') el:ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    let file = this.el.nativeElement.files[0];
    console.log(file);
  }

}
