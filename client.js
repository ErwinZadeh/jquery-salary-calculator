// console.log('client loaded!');
$(document).ready(onReady);

let employees = [];

function onReady() {
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
  }