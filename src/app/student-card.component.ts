import { Component, Input } from '@angular/core';
import { Student } from './models/student';

@Component({
  selector: 'app-student-card',
  template: `<article class="card" [class.admis]="student.grade >= 10">
    <h3>{{ student.firstName }} {{ student.lastName }}</h3>
    <a [href]="'mailto:' + student.email">{{ student.email }}</a>
    <p [title]="'Note sur 20'">{{ student.grade }}/20</p>
  </article>`,
  styles: ['.admis { border-left: 4px solid #238456; }'],
})
export class StudentCardComponent {
  @Input({ required: true }) student!: Student;
}
