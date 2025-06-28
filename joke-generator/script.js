const jokeContainer = document.getElementById('joke-container');
const jokeBtn = document.getElementById('joke-Btn');
let jokeInbox = document.getElementById('joke-inbox');
const reactionBtns = document.querySelectorAll('#btns');

// Fetch Joke & Show
jokeBtn.addEventListener('click', function () {
    async function getData() {
        try {
            // Clear old joke with fade-out
            jokeInbox.classList.remove("visible");
            jokeInbox.innerHTML = "Loading joke...";

            const res = await fetch('https://official-joke-api.appspot.com/random_joke');
            const data = await res.json();

            // Delay to show animation
            setTimeout(() => {
                jokeInbox.innerHTML = `
                    <p><strong>${data.setup}</strong></p>
                    <p>${data.punchline}</p>
                `;
                jokeInbox.classList.add("visible");
            }, 100);

        } catch (err) {
            console.error("Joke not found..", err);
            jokeInbox.innerHTML = "Oops! Couldn't fetch a joke.";
        }
    }

    getData();
});

// Reaction Buttons Animation
reactionBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        // Reset animation by removing class
        btn.classList.remove("clicked");
        void btn.offsetWidth; // force reflow
        btn.classList.add("clicked");
    });
});