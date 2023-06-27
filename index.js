const audioFiles = [
    "muslimer.mp3",
    'paspåkvinder.mp3',
    'De var heldige.mp3',
    'dinfarkuik.mp3'
  ];
  

  const image = document.getElementById('image');
  
  image.addEventListener('click', playRandomAudio);
  
  function playRandomAudio() {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    
    // Get the audio element
    const audio = document.getElementById('audio');
    
    // Set the source of the audio element to the randomly selected audio file
    audio.src = audioFiles[randomIndex];
    
    // Play the audio
    audio.play();
    image.src = "surgristine.png"
    audio.addEventListener('ended', function() {
        // Revert the image back to the original image
        image.src = 'gristine.png';
      });
  }


// Get the h1 element
const h1 = document.querySelector('h1');

// Define an array of rainbow colors
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Function to change the text color
function changeColor() {
  // Generate a random index within the range of rainbowColors array length
  const randomIndex = Math.floor(Math.random() * rainbowColors.length);

  // Get the color at the random index
  const color = rainbowColors[randomIndex];

  // Set the text color of the h1 element
  h1.style.color = color;
}

// Call the changeColor function every 500 milliseconds (0.5 seconds)
setInterval(changeColor, 80);




const heading = document.getElementById('moving-heading');
let position = 0;
let direction = 1;

function moveSideToSide() {
  position += direction;
  heading.style.left = position + 'px';
  
  const maxWidth = window.innerWidth - heading.clientWidth;
  if (position >= maxWidth || position <= 0) {
    direction *= -1;
  }
}

setInterval(moveSideToSide, 10);
