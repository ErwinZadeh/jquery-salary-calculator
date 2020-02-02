$(document).ready(handleReady);

let employees = [];
let totalMonthly = 0;

function handleReady() {
  // console.log('jquery loaded');
  addClickListeners();
}

function addClickListeners() {
  $('#addSubmitBtn').on('click', addInfo);
  
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


}
