export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  grade: number;
}

export const STUDENTS: Student[] = [
  { id: 1, firstName: 'Alice', lastName: 'Dupont', email: 'alice@example.com', grade: 15 },
  { id: 2, firstName: 'Bob', lastName: 'Martin', email: 'bob@example.com', grade: 12 },
  { id: 3, firstName: 'Chloé', lastName: 'Moreau', email: 'chloe@example.com', grade: 18 },
];
