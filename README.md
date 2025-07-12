# TypeScript Fundamentals

This project introduces the basics of TypeScript by using interfaces, classes, functions, and DOM manipulation in a simple front-end setup powered by Webpack.

---

## 📁 Project Structure

```
0x04-TypeScript/
├── task_0/ (Task 0 below)
│   ├── js/
│   │   └── main.ts # TypeScript source file
│   ├── dist/
│   │   └── bundle.js # Webpack output (after build)
│   │   └── index.html # Main HTML file to view output
│   ├── package-lock.json
│   ├── package.json # Project metadata and dependencies
│   ├── tsconfig.json # TypeScript compiler config
│   ├── .eslintrc.js # Linting configuration
│   └── webpack.config.js # Webpack bundler configuration
├── task_1/ (Task 1-4 below)
│   ├── ...
├── task_2/ (Task 5-7 below)
│   ├── ...
```

---

## ✅ Task 0 - Student Interface

- Defined a `Student` interface with the following properties:
  - `firstName` (string)
  - `lastName` (string)
  - `age` (number)
  - `location` (string)
- Created two student objects and stored them in an array named `studentsList`.
- Used **Vanilla JavaScript** (DOM API) to:
  - Create a `<table>` element
  - Add rows showing `firstName` and `location` for each student

---

### 🧠 Learning Objectives Covered

- [x] Basic types in TypeScript
- [x] Interfaces
- [x] DOM manipulation with TypeScript
- [x] Setting up TypeScript with Webpack
- [x] Using ESLint and tsconfig to enforce quality

---

## ✅ Task 1 - Teacher Interface

This task focuses on defining a TypeScript `Teacher` interface with required, optional, and read-only properties. It also supports dynamic attributes using an index signature.

---

### Features

- `firstName` and `lastName` as `readonly`
- Required: `fullTimeEmployee`, `location`
- Optional: `yearsOfExperience`
- Index signature to allow extra properties like `contract`

---

### Example Output

```ts
{
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false
}
```

---

## ✅ Task 2 - Extending the Teacher Interface

Extended the Teacher interface by creating a new interface named Directors. The Directors interface inherits all properties from Teacher and includes an additional required property:

- `numberOfReports` (number): the number of people the director oversees.

---

### Example Output

```ts
{
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17
}
```

---

## ✅ Task 3 - Printing Teachers

This task required creating a function `printTeacher` that formats a teacher's name by returning:

- The first letter of the `firstName`
- Followed by a period and space
- Then the full `lastName`

Also defined a function interface `printTeacherFunction` to enforce the correct signature.

---

### Example Output

```ts
printTeacher("John", "Doe"); // Output: J. Doe
```

---

## ✅ Task 4 - Writing a Class

- Created a `StudentClass` class that implements `StudentClassInterface`.
- Constructor and methods were strictly typed.
- Implemented `workOnHomework()` and `displayName()` methods.

---

### Example Output

```ts
const student = new StudentClass("Jane", "Doe");
console.log(student.displayName()); // "Jane"
console.log(student.workOnHomework()); // "Currently working"
```

---

## ✅ Task 5 - Advanced Types Part 1

- Defined two interfaces: `DirectorInterface` and `TeacherInterface`, each with specific task-related methods.
- Created classes `Director` and `Teacher` that implement their respective interfaces.
- Implemented `createEmployee()` to instantiate either a Director or a Teacher based on the salary.

---

### Example Output

```ts
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee("$500")); // Director
```

---

## ✅ Task 6 - Creating functions specific to employees

- Implemented a type predicate function `isDirector` to determine if an employee is of type `Director`.
- Created `executeWork`, which uses the type predicate to call the appropriate method (`workDirectorTasks` or `workTeacherTasks`).
- Demonstrated polymorphic behavior using both class instances from `createEmployee`.

---

### Example Output

```ts
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks
```

---

## ✅ Task 7 - String Literal Types

- Created a custom string literal type `Subjects` that restricts values to 'Math' or 'History'.
- Implemented the `teachClass` function which returns the appropriate teaching message based on the subject.
- Demonstrated usage with both 'Math' and 'History'.

---

### Example Output

```ts
console.log(teachClass("Math")); // Teaching Math
console.log(teachClass("History")); // Teaching History
```

---

### ✅ Task 8 - Ambient Namespaces

- Defined `RowID` as a number type and `RowElement` interface with `firstName`, `lastName`, and optional `age`.
- Declared types for third-party `crud.js` functions using an ambient namespace in `crud.d.ts`.
- Used the types in `main.ts` to create, update, and delete a row object via CRUD operations.

---

### Example Output

```ts
const row: RowElement = { firstName: "Guillaume", lastName: "Salva" };

const newRowID: RowID = CRUD.insertRow(row); // Insert row { firstName: 'Guillaume', lastName: 'Salva' }

const updatedRow: RowElement = { ...row, age: 23 }; // Update row 951 { firstName: 'Guillaume', lastName: 'Salva', age: 23 }

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID); // Delete row id 951
```

---

## 🛠️ Usage

### Install dependencies:

```bash
npm install
```

### Build project

```bash
npx webpack
```

```bash
npm run build
```

### Run locally:

Open `dist/index.html` in your browser after building.

---

## 📦 Requirements

- TypeScript (no errors during transpile)
- ESLint (no lint warnings)
- Node.js + npm
- Webpack 4.x
