// Create interfaces for director and teacher
interface DirectorInterface {
  workFromHome: string;
  getCoffeeBreak: string;
  workDirectorTasks: string;
}

interface TeacherInterface {
  workFromHome: string;
  getCoffeeBreak: string;
  workTeacherTasks: string;
}

// Implement classes for Director and Teacher
class Director implements DirectorInterface {
  workFromHome: string = "Working from home";
  getCoffeeBreak: string = "Getting a coffee break";
  workDirectorTasks: string = "Getting to director tasks";
}

class Teacher implements TeacherInterface {
  workFromHome: string = "Cannot work from home";
  getCoffeeBreak: string = "Cannot have a break";
  workTeacherTasks: string = "Getting to work";
}

// Create a function to determine the type of employee based on salary
// If salary is a number, return Director if salary >= 500, else return Teacher
const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === "number") {
    return salary < 500 ? new Teacher() : new Director();
  } else if (typeof salary === "string") {
    const numericSalary = parseFloat(salary.replace(/[^0-9.-]+/g, ""));
    return numericSalary < 500 ? new Teacher() : new Director();
  } else {
    throw new Error("Invalid salary type");
  }
};

// Type predicate to check if the employee is a Director
export const isDirector = (
  employee: Director | Teacher
): employee is Director => {
  return (employee as Director).workDirectorTasks !== undefined;
};

// Excecute work based on employee type
export const executeWork = (employee: Director | Teacher): string => {
  if (isDirector(employee)) {
    return employee.workDirectorTasks;
  } else {
    return employee.workTeacherTasks;
  }
};

// Example usage
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee("$500")); // Director

console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks
