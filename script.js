document.getElementById('calculate').addEventListener('click', function() {
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const gender = document.getElementById('gender').value;
  
  const bmi = weight / ((height / 100) ** 2);
  
  let result = 'Underweight';
  if (bmi >= 18.5 && bmi < 25) {
      result = 'Normal weight';
  } else if (bmi >= 25 && bmi < 30) {
      result = 'Overweight';
  } else if (bmi >= 30) {
      result = 'Obese';
  }
  
  document.getElementById('result').innerHTML = `Your BMI is: ${bmi.toFixed(2)};You are ${result}.`;
});

document.getElementById('reset').addEventListener('click', function() {
  document.getElementById('height').value = '';
  document.getElementById('weight').value = '';
  document.getElementById('gender').value = 'male';
  document.getElementById('result').innerHTML = '';
});