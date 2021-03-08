import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { Student } from 'src/app/core/models/student';
import { StudentService } from 'src/app/core/services/http/student.service';
import { StudentFormComponent } from '../../components/student-form/student-form.component';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students$: Observable<Student[]> | undefined;
  displayedColumns: string[]= ["id", "firstName", "lastName"];

  constructor(private _StudentService: StudentService, public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.students$ = this._StudentService.get();
  }

openDialog() {
  const dialogRef = this.dialog.open(StudentFormComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    this.loadData();
  });
}

}
