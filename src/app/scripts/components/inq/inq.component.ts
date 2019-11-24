import { Component, OnInit } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { HttpService } from './../../services/http.service'
import { Workflow } from './../../models/Workflow';
import { FormsModule } from '@angular/forms';



@Component({
  templateUrl: './inq.component.html'
})
export class InqComponent implements OnInit {

  inq:any = {};
  public workflowList: Workflow[];

  
  constructor(private ngbDateParserFormatter:NgbDateParserFormatter, private httpService: HttpService) {
    this.inq.screenList = [{code:0,value:"Bank Maintenance"},{code:1,value:"User Maintenance"}];
   }
 

  ngOnInit() {
    //this.inq.fromDate = this.ngbDateParserFormatter.parse("12/05/9999");
    this.inq.showResultSection = false;
    this.inq.allowedMaxDate = moment();
    this.inq.allowedMinDate = moment();
    this.inq.allowedMinDate = this.inq.allowedMinDate.subtract(180, 'd');
    this.inq.fromMaxDate = {day: this.inq.allowedMaxDate.date() , month: this.inq.allowedMaxDate.month() + 1 , year: this.inq.allowedMaxDate.year()};
    this.inq.fromMinDate = {day: this.inq.allowedMinDate.date() , month: this.inq.allowedMinDate.month() + 1 , year: this.inq.allowedMinDate.year()};
    this.inq.toMaxDate = {day: this.inq.allowedMaxDate.date() , month: this.inq.allowedMaxDate.month() + 1 , year: this.inq.allowedMaxDate.year()};
    this.inq.toMinDate = {day: this.inq.allowedMinDate.date() , month: this.inq.allowedMinDate.month() + 1 , year: this.inq.allowedMinDate.year()};
    this.inq.screen = this.inq.screenList[0].code;
  }

  /*openFromDate(datePicker: NgbInputDatepicker){
    console.log(datePicker);
    if(!!this.inq.toDate){
      console.log("coming to FromDate set");
      this.inq.fromMaxDate = this.inq.toDate;
    }else{
      console.log("coming to else FromDate set");
      this.inq.fromMaxDate = this.inq.allowedMaxDate;
    }
    datePicker.toggle();
  }

  openToDate(datePicker: NgbInputDatepicker){
    if(!!this.inq.fromDate){
      this.inq.toMinDate = this.inq.fromDate;
    }else{
      this.inq.toMinDate = this.inq.allowedMinDate;
    }
    datePicker.toggle();
  }*/

  onChangeFromDate(){
    if(!!this.inq.fromDate){
      this.inq.toMinDate = this.inq.fromDate;
    }else{
      this.inq.toMinDate = this.inq.allowedMinDate;
    }
  }

  onChangeToDate(){
    if(!!this.inq.toDate){
      this.inq.fromMaxDate = this.inq.toDate;
    }else{
      this.inq.fromMaxDate = this.inq.allowedMaxDate;
    }
  }

  search(){
   let fromDateStr = this.ngbDateParserFormatter.format(this.inq.fromDate);
   let toDateStr = this.ngbDateParserFormatter.format(this.inq.toDate);

   this.httpService.getWorkFlowInqList({
    fromDate : fromDateStr,
    toDate : toDateStr
   }).subscribe( (response) => {
    this.inq.showResultSection = true;
    this.workflowList = response.entityList;
   })
   //let datePipe:DatePipe = new DatePipe("en-US");
   //let fromDate = new Date(this.inq.fromDate);
   //console.log(fromDate);
   //let fromDateStr = datePipe.transform(fromDate,"dd/MM/yyyy");
   //let toDate = new Date(this.inq.toDate);
   //let toDateStr = datePipe.transform(toDate,"dd/MM/yyyy");
   //console.log(fromDateStr);
  // console.log(toDateStr);
  }

  identify(index, item){
    return item.code; 
 }

}
