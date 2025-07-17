export {};

class Student {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Course {
  name: string;
  students: Student[] = []; // Um curso tem muitos alunos 1:N

  constructor(name: string) {
    this.name = name;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  listStudents(): void {
    console.log(`Students in ${this.name}:`);
    this.students.forEach(student => {
      console.log(`- ${student.name}`);
    });
  }
}

// Criando alunos
const student1 = new Student("Bob");
const student2 = new Student("Carol");

// Criando o curso e adicionando alunos
const course = new Course("TypeScript Mastery");
course.addStudent(student1);
course.addStudent(student2);

// Exibindo os alunos do curso
course.listStudents();
