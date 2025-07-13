// Create interfaces for director and teacher
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement classes for Director and Teacher
export const Director = class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
};

export const Teacher = class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
};

// Create a function to determine the type of employee based on salary
// If salary is a number, return Director if salary >= 500, else return Teacher
export function createEmployee(
  salary: number | string
): DirectorInterface | TeacherInterface {
  if (typeof salary === "number") {
    return salary < 500 ? new Teacher() : new Director();
  } else if (typeof salary === "string") {
    const numericSalary = parseFloat(salary.replace(/[^0-9.-]+/g, ""));
    return numericSalary < 500 ? new Teacher() : new Director();
  } else {
    throw new Error("Invalid salary type");
  }
}

// Type predicate to check if the employee is a Director
export function isDirector(
  employee: DirectorInterface | TeacherInterface
): employee is DirectorInterface {
  return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

// Excecute work based on employee type
export function executeWork(
  employee: DirectorInterface | TeacherInterface
): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// String literal type for subjects
export type Subjects = "Math" | "History";

// Function to teach a class based on the subject
export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  return "Teaching History";
}

// Example usage
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee("$500")); // Director

console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks

console.log(teachClass("Math")); // Teaching Math
console.log(teachClass("History")); // Teaching History
