document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('no-btn');
    const yesButton = document.getElementById('yes-btn');
    const mainText = document.getElementById('main-text');
    const sticker = document.getElementById('sticker');
    const container = document.querySelector('.container');

    let noButtonClicked = false;

    noButton.addEventListener('mouseover', moveButton);
    noButton.addEventListener('click', handleNoClick);
    yesButton.addEventListener('click', handleYesClick);

    function moveButton() {
        if (!noButtonClicked) {
            const x = Math.random() * (window.innerWidth - noButton.clientWidth);
            const y = Math.random() * (window.innerHeight - noButton.clientHeight);
            noButton.style.left = `${x}px`;
            noButton.style.top = `${y}px`;
            noButton.classList.add('move');
        }
    }

    function handleNoClick() {
        noButtonClicked = true;
        mainText.textContent = 'Em đã không thương anh';
        sticker.innerHTML = '<img src="https://media.giphy.com/media/3o7btQqx6bTb8Axe4c/giphy.gif" alt="Sad Sticker">';
        yesButton.textContent = 'Em vẫn thương anh';
        noButton.remove();
    }

    function handleYesClick() {
        window.location.href = 'identification.html'; // Replace with the actual URL of the next page
    }
});
