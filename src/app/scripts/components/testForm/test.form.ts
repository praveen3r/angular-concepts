import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';



@Component({
  templateUrl: './test.form.component.html'
})
export class TestFormComponent implements OnInit {
  public testReactiveForm:FormGroup;
  public isSubmitted:Boolean = false;
    
  constructor(private fb:FormBuilder){
   }
 

  ngOnInit() {
    this.testReactiveForm=this.fb.group({
      userid:new FormControl('',Validators.required)
      }
    );
  }

  onSubmit(){
    this.isSubmitted = true;
    if(this.testReactiveForm.valid){
    
      console.log(this.testReactiveForm.value.userid)
    }
  }

}
