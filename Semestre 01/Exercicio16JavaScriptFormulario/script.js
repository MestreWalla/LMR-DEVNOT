function completeName() {
  let firstName = document.getElementById("fName").value;
  let secondName = document.getElementById("sName").value;
  let lastName = document.getElementById("lName").value;

  document.write("Your complete name is: " + firstName + " " + secondName + " " + lastName);
  alert("Welcome: " + firstName + " " + secondName + " " + lastName);
}

function result() {
  let firstNumber = document.getElementById("fNumber").value.replace(",", ".");
  let operator = document.getElementById("operator").value;
  let secondNumber = document.getElementById("sNumber").value.replace(",", ".");

  switch (operator) {
    case "+":
      if (firstNumber == "" || secondNumber == "") {
        alert("Write a valid number");
      } else {
        alert("RESULTADO: " + (parseFloat(firstNumber) + parseFloat(secondNumber)));
      } break;
    case "-":
      if (firstNumber == "" || secondNumber == "") {
        alert("Write a valid number");
      } else {
        alert("RESULTADO: " + (parseFloat(firstNumber) - parseFloat(secondNumber)));
      } break;
    case "*":
      if (firstNumber == "" || secondNumber == "") {
        alert("Write a valid number");
      } else {
        alert("RESULTADO: " + parseFloat(firstNumber) * parseFloat(secondNumber));
      }  break;
    case "/":
      if (secondNumber == "" || firstNumber == "") {
        alert("Write a valid number");
      } else if (firstNumber == 0 ||secondNumber == 0) {
        alert("0 is not valid for division")
      } else {
        alert("RESULTADO: " + parseFloat(firstNumber) / parseFloat(secondNumber));
      } break;
    default:
      alert("Choose a valid operation");
  }
}

function login() {
  let uName = document.getElementById("uName").value;
  let eMail = document.getElementById("eMail").value;
  let fPass = document.getElementById("fPass").value;
  let sPass = document.getElementById("sPass").value;
  if (fPass == "" || sPass == "" || eMail == "" || uName == "") {
    alert("Still blank fields");
  } else if ( fPass != sPass){
    alert("Write a valid password");
  } else {
    alert("Correct password");
  }
}

function register() {
  let uName = document.getElementById("uName").value;
  let eMail = document.getElementById("eMail").value;
  let fPass = document.getElementById("fPass").value;
  let sPass = document.getElementById("sPass").value;
  if (fPass == "" || sPass == "") {
    alert("Password is blank");
  } else if ( fPass != sPass){
    alert("Write a valid password");
  } else if (uName == ""){
    alert("Name is blank");
  } else if (eMail == ""){
    alert("E-mail is blank");
  } else {
    alert("Correct password");
  }
}