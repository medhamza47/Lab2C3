import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { SidebarComponent } from './sidebar.component';
import { StudentListComponent } from './student-list.component';
import { Student, STUDENTS } from './models/student';

@Component({
  selector: 'app-root',
  imports: [FormsModule, HeaderComponent, SidebarComponent, StudentListComponent],
  template: `
    <app-header [title]="title"/>
    <main class="layout">
      <app-sidebar/>
      <section id="etudiants">
        <h2>Étudiants</h2>
        <div class="toolbar">
          <label>Recherche
            <input #search [(ngModel)]="query" (keydown.escape)="resetStudents()"
              (keyup.enter)="search.blur()" (focus)="focused = true" (blur)="focused = false"
              [placeholder]="focused ? 'Nom ou prénom' : 'Rechercher'">
          </label>
          <button type="button" (click)="resetStudents()">Réinitialiser</button>
        </div>
        <app-student-list [students]="filteredStudents"/>
      </section>
    </main>`,
  styles: [`.layout { display: flex; gap: 1rem; } section { flex: 1; min-width: 0; }
    @media (max-width: 42rem) { .layout { flex-direction: column; } }`],
})
export class AppComponent {
  readonly title = 'EduManager';
  students = [...STUDENTS];
  query = '';
  focused = false;

  get filteredStudents(): Student[] {
    const query = this.query.trim().toLowerCase();
    return this.students.filter(s => `${s.firstName} ${s.lastName}`.toLowerCase().includes(query));
  }

  resetStudents(): void {
    this.students = [...STUDENTS];
    this.query = '';
  }
}
