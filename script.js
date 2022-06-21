const calculator = () => {
  let num1 = prompt("Enter first Number");
  if (num1 === null) return;
  num1 = Number(num1)
   
  let num2 = prompt("Enter second Number");
  if (num2 === null) return;
  num2 = Number(num2)
  let operation = prompt("Enter operation. Choose +, -, * or / ");
  if (operation === null) return;

  while (
    operation !== "+" &&
    operation !== "-" &&
    operation !== "*" &&
    operation !== "/"
  ) {
    operation = prompt("Invalid operation. Choose +, -, * or / ");
  }
  

  if (operation === "+") {
    alert(num1 + num2);
  } else if (operation === "-") {
    alert(num1 - num2);
  } else if (operation === "*") {
    alert(num1 * num2);
  } else if (operation === "/") {
    if (num2 === 0) {
      alert("Can't divide by 0");
    } else {
      alert(num1 / num2);
    }
  }
};

calculator();

