const jokeBtn= document.getElementById('jokeBtn');
const jokeBox= document.getElementById('joke');


const emojis = ["😂", "🤣", "😆", "😹", "🎉", "🥳", "💥"];

function createEmojiBurst() {
  const burst = document.createElement('div');
  burst.className = 'emoji-burst';
  burst.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  jokeBox.appendChild(burst);

  setTimeout(() => {
    burst.remove();
  }, 1000);
}

function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      jokeBox.classList.remove("pop");
      void jokeBox.offsetWidth;

      jokeBox.innerHTML = `
        <div class="emoji-container">
          <p><strong>${data.setup}</strong></p>
          <p>${data.punchline}</p>
        </div>
      `;

      jokeBox.classList.add("pop");

      // Trigger 3 emoji bursts
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          createEmojiBurst();
        }, i * 200);
      }
    })
    .catch(err => {
      jokeBox.innerHTML = "Oops! Couldn't fetch joke 😢";
      console.error(err);
    });
}


jokeBtn.addEventListener('click',getJoke);