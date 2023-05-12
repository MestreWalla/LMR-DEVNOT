function completName() {
  let firstName = document.getElementById("fName").value;
  let operator = document.getElementById("sName").value;
  let lastName = document.getElementById("lName").value;

  document.write(
    "Your complete name is: " + firstName + " " + secondName + " " + lastName
  );
  alert("Welcome: " + firstName + " " + secondName + " " + lastName);
}

function result() {
  let firstNumber = document.getElementById("fNumber").value;
  let operator = document.getElementById("operator").value;
  let secondNumber = document.getElementById("sNumber").value;

  switch (operator) {
    case "+":
      alert("RESULTADO: " + parseInt(firstNumber) + parseInt(secondNumber));
      break;
    case "-":
      alert("RESULTADO: " + parseInt(firstNumber) - parseInt(secondNumber));
      break;
    case "*":
      alert("RESULTADO: " + parseInt(firstNumber) * parseInt(secondNumber));
      break;
    case "/":
      if (secondNumber == 0) {
        alert("Invalid");
      } else {
        alert(
          "RESULTADO: " + parseFloat(firstNumber) / parseFloat(secondNumber)
        );
      }
      break;
    default:
      alert("Choose a valid operation");
  }
}
