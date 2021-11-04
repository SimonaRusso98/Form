import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-sezione1',
  templateUrl: './sezione1.component.html',
  styleUrls: ['./sezione1.component.scss']
})

export class Sezione1Component implements OnInit {

  validations_form!:FormGroup;
  
  adminvalue:boolean=false;
  adminvalue1:boolean=false;

  constructor(private fb: FormBuilder) { }
  
 
  
  ngOnInit(): void {
    this.validations_form = this.fb.group({
      username:['', Validators.required
        
      ],
      password:('')
    });
  }

  funcLog(){
    console.log(this.validations_form);
    if(this.validations_form.get('username')?.value=== 'admin'){
      console.log('valore esatto');
      this.adminvalue=true;
    }
    if(this.validations_form.get('password')?.value ==='admin'){
      console.log('valore esatto');
      this.adminvalue1=true;
    }
  }

 

}
