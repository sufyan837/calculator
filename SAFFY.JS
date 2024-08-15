document.getElementById('calculateBtn').addEventListener('click', function() {
    const subject1 = parseFloat(document.getElementById('subject1').value) || 0;
    const subject2 = parseFloat(document.getElementById('subject2').value) || 0;
    const subject3 = parseFloat(document.getElementById('subject3').value) || 0;
    const subject4 = parseFloat(document.getElementById('subject4').value) || 0;
    const subject5 = parseFloat(document.getElementById('subject5').value) || 0;

    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    const percentage = (totalMarks / 500) * 100;

    document.getElementById('totalMarks').textContent = totalMarks;
    document.getElementById('percentage').textContent = percentage.toFixed(2) + '%';

    // Show result with animation
    const resultDiv = document.querySelector('.result');
    resultDiv.classList.add('show');
});