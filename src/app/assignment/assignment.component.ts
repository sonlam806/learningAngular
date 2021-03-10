import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  // @ts-ignore
  projectForm: FormGroup;
  forbiddenProjectName = ['Test'];

  constructor() { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(null, [Validators.required, this.validateProjectName.bind(this)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl('stable')
    })
  }

  onSubmit() {
    console.log(this.projectForm.get('projectName'))
  }

  validateProjectName(control: FormControl): { [key: string]: boolean } | null {
    if(this.forbiddenProjectName.includes(control.value)) {
    return {invalid: true}
    }
    else return null;
  }
}
