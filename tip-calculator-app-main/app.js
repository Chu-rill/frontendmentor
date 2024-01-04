let tipChoices = document.querySelectorAll(".tipz");
let numberOfPeople = document.querySelector(".numpeople");
let billCost = document.querySelector(".billz");
let tipTotal = document.querySelector(".totaltip");
let costPerPerson = document.querySelector(".perperson");
let btn = document.querySelector(".complete");

let percentTip;

tipChoices.forEach((tipChoice) => {
  tipChoice.addEventListener("click", (e) => {
    percentTip = e.target.id;
  });
});

// Add a click event listener to the button
btn.addEventListener("click", () => {
  // Parse input values as integers
  const billz = parseFloat(billCost.value); // Use parseFloat for decimal numbers
  const numberOfPeoplez = parseInt(numberOfPeople.value); // Parse the value property of the input element

  // Check if the input values are valid
  if (!isNaN(billz) && !isNaN(numberOfPeoplez)) {
    // Calculate individual tip and total cost per person
    const individualTip = (billz / 100) * percentTip;
    const totalCostPerPerson = individualTip * numberOfPeoplez;

    // Display the results
    tipTotal.innerText = individualTip.toFixed(2); // Display with 2 decimal places
    costPerPerson.innerHTML = totalCostPerPerson.toFixed(2); // Display with 2 decimal places
  } else {
    // Handle invalid input
    tipTotal.innerText = "Invalid input";
    costPerPerson.innerHTML = "Invalid input";
  }
  billCost.value = "";
  numberOfPeople.value = "";
  // Debugging logs
  console.log(typeof billz);
  console.log(typeof numberOfPeoplez);
  console.log(typeof individualTip);
  console.log(typeof costPerPerson);
});

// Here's what I changed and added:

// Corrected the parsing of the input values as integers and floats.
// Defined the percentTip variable, which should represent the tip percentage. You can change it as needed.
// Checked if the input values are valid before performing calculations.
// Calculated the individual tip and the total cost per person.
// Displayed the results with two decimal places using the toFixed method.
// Added error handling for invalid input.
// Added comments to explain the code.
