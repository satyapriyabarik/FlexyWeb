import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  })
export class ContactsComponent implements OnInit {
  public eform: FormGroup;
  public submitted = false;
  public  submitmsg='Register here for sure sort opportunity !'
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.eform = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required]]
  },
  {
validator:ContactsComponent.MatchPassword // your validation method
});
  }
  get f() {
    return this.eform.controls; 
   }
   static MatchPassword(AC: AbstractControl) {
        let password = AC.get('password').value; // to get value in input tag
        let confirmPassword = AC.get('cpassword').value; // to get value in input tag
         if(password != confirmPassword) {
             console.log('false');
             AC.get('cpassword').setErrors( {MatchPassword: true} )
         } else {
             console.log('true');
             return null
         }
     }
   onSubmit() {
         this.submitted = true;
          // stop here if form is invalid
         if (this.eform.invalid) {
             return;
         }
       this.submitmsg="You Details has been Saved Successfully"
       
     }

}
