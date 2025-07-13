// Define the Teacher interface
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // allows additional properties
}

// Extend Teacher interface to Directors
interface Director extends Teacher {
  numberOfReports: number;
}

// Define interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Define the StudentClass interface and constructor interface
export interface StudentClassInteface {
  workOnHomework(): string;
  displayName(): string;
}

export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInteface;
}

// Implement the StudentClass using the interface
class StudentClass implements StudentClassInteface {
  constructor(private firstName: string, private lastName: string) {}
  // Implementing the methods from the interface
  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName;
  }
}

// Example objects

const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};
console.log(teacher3);

const director1: Director = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17,
};
console.log(director1);

console.log(printTeacher("John", "Doe")); // Output: J. Doe

const student = new StudentClass("Jane", "Doe");
console.log(student.displayName()); // "Jane"
console.log(student.workOnHomework()); // "Currently working"
