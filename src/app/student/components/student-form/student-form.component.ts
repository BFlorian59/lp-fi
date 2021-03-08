import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from 'src/app/core/models/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  studentForm: FormGroup;

  classes: string[] = [

    'LP-DIM-FI',
    'LP-DIM-APP'
  ]

  

  constructor(private fb: FormBuilder) {

    this.studentForm = this.fb.group({

      firstname: [''],
      lastname:[''],
      birthyear:[''],
      class:['']
    })
      
    

   }

  ngOnInit(): void {
  }

  ngSubmitt(form: Student){
    
  }

}
