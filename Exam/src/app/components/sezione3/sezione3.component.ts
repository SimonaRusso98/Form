import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import {parse, stringify, toJSON, fromJSON} from 'flatted';
@Component({
  selector: 'app-sezione3',
  templateUrl: './sezione3.component.html',
  styleUrls: ['./sezione3.component.scss']
})
export class Sezione3Component implements OnInit {
  surveyform!:FormGroup;
   str:string = JSON.stringify(this.surveyform);
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.surveyform = this.fb.group({
      feelings: this.fb.group({
        medium:[false],
        alot:[false],
        nothing:[false]
      }),
      state:[''],
      age:['']
    })
  }

  get feelings(){
    return this.surveyform.get('feelings')
  }

  get state(){
    return this.surveyform.get('state')
  }

  get age(){
    return this.surveyform.get('age')
  }

  showObj(surveyform:FormGroup){
    //alert (JSON.stringify(this.surveyform));
   //alert(JSON.parse(this.str));
   alert(this.surveyform.value);
    
  }
 
  
  onSubmit() {
    if (this.surveyform.valid) {
      console.log("Form Submitted!");
     // alert(this.surveyform.value);
   console.log(this.surveyform);
   
  
  }
}
  

}
