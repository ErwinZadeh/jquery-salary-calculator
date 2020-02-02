// console.log('client loaded!');
$(document).ready(onReady);

let employees = [];
let totalMonthly = 0;

function onReady() {
  // console.log('jquery loaded');
  addClickListeners();
}

function addClickListeners() {
  $('#addSubmitBtn').on('click', addInfo);
  //to trigger removing the employee line by click on delete in the line!
  $('#addNewEmployeeSpace').on('click', '.deleteBtn', deleteInfo);
}

//to remove the employee line by click on delete in the line
function deleteInfo() {
  // console.log('clicked delete Info');
  let button = $(this);
  button.closest('tr').remove();
}

function addInfo() {
  // console.log('clicked add Info!');
  let firstName = $('#firstNameIn').val();
  let lastName = $('#lastNameIn').val();
  let idNumber = $('#idNumberIn').val();
  let jobTitle = $('#jobTitleIn').val();
  let annualSalary = $('#annualSalaryIn').val();

  let newEmployee = { firstName, lastName, idNumber, jobTitle, annualSalary }
  employees.push(newEmployee);

  idNumber = Number(idNumber);
  annualSalary = Number(annualSalary);
  // console.log(firstName, lastName, idNumber, jobTitle, annualSalary);


  $('#addNewEmployeeSpace').append(
    `
    <tr>
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${idNumber}</td>
      <td>${jobTitle}</td>
      <td>${annualSalary}</td>
      <td><button class="deleteBtn btn btn-danger">DELETE!</button></td>
    </tr>
    `
  );


  $('#firstNameIn').val('');
  $('#lastNameIn').val('');
  $('#idNumberIn').val('');
  $('#jobTitleIn').val('');
  $('#annualSalaryIn').val('');

  calculateTotalMonthly();
}

function calculateTotalMonthly() {
  // console.log('clicked calculate total info');
  //we assume in this function locally "totalMontly = 0", to prevent 
  //each time we add a new emoloyee , it be added to the loop again, 
  //otherwise "totalMonthly" will not correct!
  let totalMonthly = 0;
  for (let i = 0; i < employees.length; i++) {
    totalMonthly += Number(employees[i].annualSalary / 12);
  }
  // console.log('totalMonthly:', totalMonthly);

  let el = $('#totalMonthlyOut');
  el.empty();
  el.append(totalMonthly);
  exceedingTotalMontkly(totalMonthly);
} 

//If the total monthly cost exceeds $20,000, 
//add a red background color to the total monthly cost.
function exceedingTotalMontkly(totalMonthly) {
  if ( totalMonthly > 20000 ) {
    $("#totalMonthlyOut").css("background-color", "red");
  }
}
