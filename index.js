document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (!age || !gender || isNaN(weight) || isNaN(height)) {
        alert('Please fill in all fields');
        document.getElementById('bmiResult').textContent = '00';
        document.getElementById('bmiCategory').textContent = '';
        return;
    }
    const bmi = weight / (height * height);
    const bmiResult = bmi.toFixed(2);
    document.getElementById('bmiResult').textContent = bmiResult;
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
    } else if (bmi >= 30 && bmi <= 34.9) {
        category = 'Obese';
    } else {
        category = 'Extremely Obese';
    }

    document.getElementById('bmiCategory').textContent = `${category} (Gender: ${gender}, Age: ${age})`;
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('bmiForm').reset(); 
    document.getElementById('bmiResult').textContent = '00'; 
    document.getElementById('bmiCategory').textContent = ''; 
});
