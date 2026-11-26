import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Student } from './models/student';
import { StudentCardComponent } from './student-card.component';

@Component({
  selector: 'app-student-list',
  imports: [NgFor, NgIf, StudentCardComponent],
  template: `<div class="grid">
    <app-student-card *ngFor="let student of students; trackBy: trackStudent" [student]="student"/>
  </div><p *ngIf="!students.length">Aucun étudiant trouvé.</p>`,
})
export class StudentListComponent {
  @Input({ required: true }) students!: Student[];
  trackStudent(index: number, student: Student): number { return student.id; }
}
