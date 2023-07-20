
window.addEventListener('load', function() {
  // Fade out the preloader after 5 seconds
  setTimeout(function() {
    var preloader = document.querySelector('.preloader');
    preloader.classList.add('fade-out');
  }, 1500);
});



var menuBars = document.getElementById('bars');
var mobileMenu = document.getElementById('mobilenav');

menuBars.addEventListener('click', function() {
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.animation = 'fadeOut 0.5s ease forwards';

    setTimeout(function() {
      mobileMenu.style.display = 'none';
    }); // Wait for fade-out animation to complete before hiding the menu
  } else {
    mobileMenu.style.display = 'block';
    mobileMenu.style.animation = 'fadeIn 1s ease forwards';
  }
});

// Hide the menu initially
mobileMenu.style.display = 'none';


const textElement = document.querySelector('.scramble-text');
const originalText = textElement.textContent;
const scrambledText = ['Designer', 'Developer'];
let currentIndex = 0;

function scrambleText() {
  textElement.style.opacity = 0; // Fade out the text
  setTimeout(() => {
    textElement.textContent = scrambledText[currentIndex];
    currentIndex = (currentIndex + 1) % scrambledText.length; // Increment the current index and loop back to the beginning if needed
    textElement.style.opacity = 1; // Fade in the new text
  }, 500); // Wait for the fade-out transition to complete (0.5s)
}

setInterval(scrambleText, 2000); // Change text every 2 seconds






