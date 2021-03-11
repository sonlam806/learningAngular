import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
})
export class AssignmentComponent implements OnInit {
  // @ts-ignore
  projectForm: FormGroup;
  forbiddenProjectName = ['test'];

  constructor() {}

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(null, [
        Validators.required,
        this.validateProjectName.bind(this),
      ]),
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        // @ts-ignore
        this.validateEmail
      ),
      projectStatus: new FormControl('stable'),
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  validateProjectName(control: FormControl): { [key: string]: boolean } | null {
    if (this.forbiddenProjectName.includes(control.value?.toLowerCase())) {
      return { invalid: true };
    } else return null;
  }

  validateEmail(
    control: FormControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const validatePromise = new Promise<ValidationErrors | null>((resolve) => {
      setTimeout(() => {
        if (control.value?.toLowerCase() === 'shindo@shindo.com') {
          resolve({ invalid: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return validatePromise;
  }
}

