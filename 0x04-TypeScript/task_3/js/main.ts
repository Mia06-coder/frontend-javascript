/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = { firstName: "Guillaume", lastName: "Salva" };

const newRowID: RowID = CRUD.insertRow(row); // Insert row { firstName: 'Guillaume', lastName: 'Salva' }

const updatedRow: RowElement = { ...row, age: 23 }; // Update row 951 { firstName: 'Guillaume', lastName: 'Salva', age: 23 }

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID); // Delete row id 951
