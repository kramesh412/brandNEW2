import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.scss']
})
export class LogincomponentComponent implements OnInit {
  registerForm: FormGroup ;
  submittedForm: boolean;
  RegData: any;
  userdata = [{
    firstName: 'ramesh',
    lastName: 'kanchemreddy',
    email: 'abcde@gmail.com',
  
    Gender: 'male',
    password: 'a',
    confirmPassword: 'a',
  }];
  editIndex: any;
  isEdit: boolean;
  
  constructor(public fb:FormBuilder) {
  
   }
  ngOnInit(): void {
    this.registerForm =this.fb.group({
      firstName:['',Validators.required], 
      lastName:['',Validators.required],
      Gender:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
    })
    


  }
  isFieldValid(field: string) {
    return (
      (!this.registerForm.get(field).valid && this.registerForm.get(field).touched) ||
      (this.registerForm.get(field).untouched && this.registerForm)
    );
  }
  register(){
this.submittedForm=true;
if(this.registerForm.valid && this.registerForm.value.password ===this.registerForm.value.confirmPassword){
  // this.userdata=this.registerForm.value;

  // console.log("jjjjjjj",this.userdata);
  if(this.isEdit){
    this.userdata[this.editIndex]= this.registerForm.value;
  } else {
    
    this.userdata.push(this.registerForm.value);
  }
  this.submittedForm = false;
  this.cancel();
}
  }
  reset(){
    this.registerForm.reset();
    this.submittedForm=false;

  }
  Edit(data, i) {
    this.editIndex = i;
    this.isEdit = true;
    this.registerForm.patchValue(data);
  }

  Delete(index) {
    this.userdata.splice(index, 1);
  }
  cancel() {
    this.registerForm.reset();
    this.isEdit = false;
    this.editIndex = null;
  }
}
