btn.addEventListener("click", () => {
  let billz = parseInt(billCost.value);
  let numberOfPeoplez = parseInt(numberOfPeople);
  let individualTip = (billz.valueOf / 100) * percentTip;

  if (isNaN(individualTip) && isNaN(numberOfPeoplez)) {
    tipTotal.innerText = individualTip;

    costPerPerson.innerHTML = individualTip.value * numberOfPeoplez.value;
  }

  console.log(typeof billz.valueOf);
  console.log(typeof numberOfPeoplez);
  console.log(typeof individualTip);
  console.log(typeof costPerPerson);
});
