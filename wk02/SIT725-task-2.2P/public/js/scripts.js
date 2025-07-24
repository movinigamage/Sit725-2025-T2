document.getElementById('calcForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    fetch(`/add?num1=${num1}&num2=${num2}`)
        .then(response => response.text())
        .then(result => {
            document.getElementById('result').textContent = result;
        })
        .catch(error => {
            document.getElementById('result').textContent = 'Error occurred.';
            console.error('Error:', error);
        });
});

