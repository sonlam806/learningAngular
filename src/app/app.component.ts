import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // @ts-ignore
  @ViewChild('formEl') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';


  // onSubmit(form: NgForm) {
  //   console.log('submmited', form);
  // }

  suggestUserName() {
    const suggestedName = 'SpiderMan';
    this.signupForm.form.patchValue({
      username: suggestedName
    })

  }

  onSubmit() {
    console.log(this.signupForm)
  }
}
