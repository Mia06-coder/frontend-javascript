# TypeScript Fundamentals

This project introduces the basics of TypeScript by using interfaces, classes, functions, and DOM manipulation in a simple front-end setup powered by Webpack.

---

## 📁 Project Structure

```
0x04-TypeScript/
├── task_0/
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
├── task_1/
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

## Task 2 - Extending the Teacher Interface

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

## Task - Printing Teachers

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

## 🛠️ Usage

### Install dependencies:

```bash
npm install
```

### Build project

```bash
npx webpack
```

### Run locally:

Open `dist/index.html` in your browser after building.

---

## 📦 Requirements

- TypeScript (no errors during transpile)
- ESLint (no lint warnings)
- Node.js + npm
- Webpack 4.x
