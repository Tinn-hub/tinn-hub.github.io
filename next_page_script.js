document.getElementById('submit-btn').addEventListener('click', function() {
    const inputDate = document.getElementById('date-input').value;
    const feedbackText = document.getElementById('feedback-text');
    const correctDate = '2017-03-21';

    if (inputDate === correctDate) {
        window.location.href = '/main.html'; // Redirect to index page
    } else {
        feedbackText.textContent = 'Em còn nhớ hay em đã quên';
    }
});
