export {};

class Student {
  name: string;
  courses: Course[] = []; // cursos que o estudante faz

  constructor(name: string) {
    this.name = name;
  }

  enroll(course: Course): void {
    if (!this.courses.includes(course)) {
      this.courses.push(course);
      course.addStudent(this); // adiciona o aluno no curso (manter sincronizado)
    }
  }

  listCourses(): void {
    console.log(`${this.name} is enrolled in:`);
    this.courses.forEach(c => console.log(`- ${c.name}`));
  }
}

class Course {
  name: string;
  students: Student[] = []; // alunos matriculados

  constructor(name: string) {
    this.name = name;
  }

  addStudent(student: Student): void {
    if (!this.students.includes(student)) {
      this.students.push(student);
      student.enroll(this); // mantém a associação bidirecional
    }
  }

  listStudents(): void {
    console.log(`Students in course ${this.name}:`);
    this.students.forEach(s => console.log(`- ${s.name}`));
  }
}

// Criando instâncias
const math = new Course("Math");
const physics = new Course("Physics");

const alice = new Student("Alice");
const bob = new Student("Bob");

// Matriculando alunos em cursos
alice.enroll(math);
alice.enroll(physics);

bob.enroll(math);

// Listando os cursos dos alunos
alice.listCourses();
// Alice is enrolled in:
// - Math
// - Physics

bob.listCourses();
// Bob is enrolled in:
// - Math

// Listando os alunos nos cursos
math.listStudents();
// Students in course Math:
// - Alice
// - Bob

physics.listStudents();
// Students in course Physics:
// - Alice
