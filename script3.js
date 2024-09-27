document.onreadystatechange = function() {
    var state = document.readyState
    // alert("Server Down, visit us later");
    // window.open("https://chem-easy.web.app/test/init.html","_self");
    if (state == 'interactive') {
        document.getElementById('loader').style.visibility = 'visible'
        document.getElementById('body').style.overflow = 'hidden'
    } else if (state == 'complete') {
        setTimeout(function() {
            document.getElementById('interactive');
            document.getElementById('loader').style.visibility = "hidden";
            document.getElementById('load-holder').style.visibility = "hidden";
            document.getElementById('body').style.overflow = 'auto'
        }, 0);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const clicker = document.getElementById('clicker');
    const startMusicButton = document.getElementById('startMusicButton');
    const container = document.getElementById('container');
    const card = document.querySelector('.card');
    const video = document.getElementById('video');
    const poemElement = document.getElementById('poem');
    const hbba = document.getElementById('hbba');
    const ba = document.getElementById('ba');
    const video2 = document.getElementById('video2');


    startMusicButton.style.display = "none";

    // if and only if the clicker element is clicked 6 times then only display element : startMusicButton on the screen else not.
    clicker.addEventListener('click', () => {
        //click counter:
        clicker.clickCount = clicker.clickCount ? clicker.clickCount + 1 : 1;
        if (clicker.clickCount === 6) {
            startMusicButton.style.display = "inline";
        }
    });

    // Poem content
    const poemLines = [
        "Happy birthday, Bro! ",
        "You're the best, that's true.",
        "You're comedy and funny,",
        "And I bit you.",
        " ",
        "You make me laugh,",
        "You chidaying me dhapu.",
        "I'm so lucky to have you,",
        "You are Fusu Fusu Fusu...😁 ",
        " ",
        "Wish you a many many happy returns of the day.",
        "May your day be filled with joy and happiness.",
        "May your dreams and aspirations come true.",
        "May your mouth stop at chidaying me.",
        " ",
        "WISHING YOU A HAPPY BIRTHDAY TO YOU! 😁😁😁"
    ];

    const poemWords = poemLines.flatMap(line => line.split(' '));

    // Show overlay and play music
    startMusicButton.addEventListener('click', () => {
        overlay.style.display = 'none';
        video2.style.display = 'none';
        video.style.display = 'flex';
        video.play();
        card.style.display = 'none';
        hbba.style.display = 'none';
        ba.style.display = 'none';

        container.style.display = 'flex';
        container.requestFullscreen();
        

        //hbba
        setTimeout(() => {
            hbba.style.display = 'inline-block';
            hbba.style.animation = 'fadeIn 1s ease';
        }, 15000);
        setTimeout(() => {
            hbba.style.animation = 'fadeIn 1s ease';
            hbba.style.display = 'none';
        }, 30000);

        //ha
        setTimeout(() => {
            ba.style.display = 'inline-block';
            ba.style.animation = 'fadeIn 1s ease';
        }, 55000);
        setTimeout(() => {
            ba.style.animation = 'fadeIn 1s ease';
            ba.style.display = 'none';
        }, 69000);

        //poem
        setTimeout(() => {
            card.style.display = 'inline-block';
            animatePoem();
        }, 110000);
        setTimeout(() => {
            card.style.display = 'none';
        }, 168000);

        //video2
        setTimeout(() =>{
            video2.style.display = 'flex';
            video2.style.animation = 'fadeIn 1s ease';
            video2.play();
            video2.playbackRate = 0.5;
        }, 224000)
        setTimeout(() =>{
            video2.style.display = 'none';
            video2.style.animation = 'fadeIn 1s ease';
            card.style.display = 'inline-block';
            animatePoem();
        }, 380000)
        

    });

    // Animate the poem
    function animatePoem() {
        const musicDuration = video.duration;
        const poemText = poemLines.join('\n');
        const poemLetters = poemText.split('');
        let currentLetterIndex = 0;
        function typeNextLetter() {
            if (currentLetterIndex < poemLetters.length) {
                const currentWord = poemLetters[currentLetterIndex];
                poemElement.textContent = poemLetters.slice(0, currentLetterIndex + 1).join('');
                currentLetterIndex++;
                setTimeout(typeNextLetter, 100); // Adjust typing speed here
            }
        }
        typeNextLetter();


        const delayPerLine = (musicDuration / poemLines.length) * 1000; // in milliseconds
        const delayBetweenLines = delayPerLine * 0.5;


        let totalDelay = 0;

        poemElement.style.maxHeight = 'none'; // Allow full height
        poemElement.style.opacity = '1';

        poemLines.forEach((line, index) => {
            setTimeout(() => {
                //poemElement.innerHTML += line + '<br>';
            }, totalDelay);
            totalDelay += delayPerLine;
        });
    }
});
