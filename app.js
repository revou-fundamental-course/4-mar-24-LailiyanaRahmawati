const form = document.getElementById("bmi-form");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const genderSelect = document.getElementById("gender");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const weight = weightInput.value;
  const height = heightInput.value;
  const gender = genderSelect.value;
  const bmi = (weight / (height / 100) ** 2).toFixed(2);

  let suggestion = "";

  if (bmi < 18.5) {
    suggestion = "You are underweight. Try to gain some weight by eating a balanced diet.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    suggestion = "You have a normal weight. Keep up the good work!";} else {
    suggestion = "You are overweight. Consider adopting a healthier lifestyle and regular exercise.";
  }

  if (gender === "female") {
    suggestion += " Please note that BMI for women might not be as accurate as for men.";
  }

  resultDiv.innerHTML = `Your BMI is ${bmi}. ${suggestion}`;
  resultDiv.style.display = "block";
});