// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let employees = [];

// Collect employee data
const collectEmployees = function () {
  let employees = [];
  
  //Will run in a while loop until the First and Last name + Salary are gotten at least once

  while(true) {
      let firstName;

      // Using this do loop we can prevent the name being empty
      do {
          firstName = prompt('Please enter your First name:', '');
      } while (!firstName || !isNaN(firstName));
      
      console.log("You entered: " + firstName);
      
      let lastName;

      // Similarly using this do loop we can prevent the name being empty
      do {
          lastName = prompt('Please enter your Last name:', '');
      } while (!lastName || !isNaN(lastName));
      
      console.log("You entered: " + lastName);

      let salary;

      // This loop is slightly different in that it prevents it from being anything other than a number
      do {
          salary = prompt('Please enter your salary:', '');
      } while (isNaN(salary) && salary !== null);

      console.log("You entered: " + salary);
      
      // We log the FirstName, LastName and salary into an array of attributes connected to employee
      // Using toUpperCase() and slice we can make sure the first character of the First and Last name are capitalized
      let employee = {
          firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1),
          lastName: lastName.charAt(0).toUpperCase() + lastName.slice(1),
          salary: "$" + salary
      };
      
      // Adds the newly created elements into the employee array and towards the function down below
      employees.push(employee);
      
      // Will continuously loop this function until the user cancels out of it
      const nextTag = confirm('Would you like to add another employee?');
      if (!nextTag) {
          break; // Exit the loop if the user doesn't want to add another employee
      }
  }
  
  return employees;
};


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let totalEmployeeSalary;

  for (let employee of employeesArray) {
    totalEmployeeSalary += employee.salary;
  }

}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee

  // Using Math.floor we can cycle a random number and multiply by the employee array's length
  // This let's us get a number that we can then use to select a random employee in the next line directly from the array
  let randomEmp = Math.floor(Math.random() * employeesArray.length)
  let newRandomEmp = employeesArray[randomEmp];
  console.log(`Here's a random employee ${newRandomEmp.firstName} ${newRandomEmp.lastName}`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
