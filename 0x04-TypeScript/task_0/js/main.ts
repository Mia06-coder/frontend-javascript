// Define a Student interface and create two student objects
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Mia",
  lastName: "Mudzingwa",
  age: 24,
  location: "Harare",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

// Store the students in an array
const studentsList: Student[] = [student1, student2];

// Create a table and populate it with the students' first names and locations
const table = document.createElement("table");

const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

const headers = ["First Name", "Location"];
headers.forEach((header) => {
  const th = document.createElement("th");
  th.textContent = header;
  th.style.textAlign = "left";
  th.style.padding = "8px";
  th.style.border = "1px solid #ddd";
  th.style.backgroundColor = "#f2f2f2";
  headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.padding = "8px";
  firstNameCell.style.border = "1px solid #ddd";

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.padding = "8px";
  locationCell.style.border = "1px solid #ddd";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
