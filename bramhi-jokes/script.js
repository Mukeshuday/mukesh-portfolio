let jokes = [];

// Fetch the jokes from the local jokes.json file
fetch('./data/jokes.json')
  .then(response => response.json())
  .then(data => {
    jokes = data.jokes;
    showRandomJoke(); // Show one joke at start
  })
  .catch(error => {
    console.error("Error loading jokes:", error);
  });

// Function to show a random joke
function showRandomJoke() {
  if (jokes.length === 0) return;

  const randomIndex = Math.floor(Math.random() * jokes.length);
  const joke = jokes[randomIndex];

  const setupEl = document.querySelector('.setup');
  const punchlineEl = document.querySelector('.punch-line');
  const imageEl = document.getElementById('template');

  setupEl.textContent = joke.setup;
  punchlineEl.textContent = joke.punchline;
  imageEl.src = joke.imageUrl;

  // Trigger punchline underline animation
  punchlineEl.classList.remove('animate');         // reset animation
  void punchlineEl.offsetWidth;                    // force reflow
  punchlineEl.classList.add('animate');            // re-apply animation
}

// Button event listener
document.getElementById('joke-button').addEventListener('click', showRandomJoke);