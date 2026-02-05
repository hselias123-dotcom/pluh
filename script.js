function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function () {
            showYayThenHeart();
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText =
            'Ju sure about that MUMMAAA 🙄?';

        let yesButton = document.getElementById('yes-button');
        let currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        yesButton.style.fontSize = parseFloat(currentFontSize) * 2 + 'px';
    }
}

function flashRainbowColors(callback) {
    let colors = ['#ff0000','#ff7f00','#ffff00','#00ff00','#0000ff','#4b0082','#9400d3'];
    let i = 0;
    let interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);

    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '#FADADD';
        callback();
    }, 2000);
}

// Show initial cat GIF
function displayCat() {
    let imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    let catImage = new Image();
    catImage.src = 'cat.gif.png'; // Make sure the filename is exact
    catImage.alt = 'Cat';

    imageContainer.appendChild(catImage);
}

function showYayThenHeart() {
    const imageContainer = document.getElementById('image-container');
    const question = document.getElementById('question');

    imageContainer.innerHTML = '';

    // Update text
    question.innerText =
        'BWAHAHA YAYYYYYYYYYY MY GOOD GIRLL JU MY VALENTINE FOREVERRR😆💖';
    question.style.fontSize = '56px';
    question.style.display = 'block';

    document.getElementById('options').style.display = 'none';

    // Wrapper to hold multiple images side by side
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.gap = '20px';
    wrapper.style.alignItems = 'center';

    // Cat GIF
    const catImage = new Image();
    catImage.src = 'cat.gif.png';
    catImage.alt = 'Happy Cat';
    catImage.style.width = '180px';

    // Bell image (NEW)
    const bellImage = new Image();
    bellImage.src = 'bell.png'; // 🔔 image
    bellImage.alt = 'Bell';
    bellImage.style.width = '160px';

    wrapper.appendChild(catImage);
    wrapper.appendChild(bellImage);
    imageContainer.appendChild(wrapper);

    // After 2 seconds → switch to heart cat
    setTimeout(function () {
        imageContainer.innerHTML = '';

        const heartImage = new Image();
        heartImage.src = 'cat-heart.gif';
        heartImage.alt = 'Cat Heart';
        heartImage.style.width = '200px';

        imageContainer.appendChild(heartImage);
    }, 2000);
}

// Show initial cat
displayCat();
