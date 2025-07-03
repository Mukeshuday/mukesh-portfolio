const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

const pokeTitle = document.getElementById("pokemon-title");
const pokeImg = document.getElementById("pokemon-image");
const pokeName = document.getElementById("poke-name");
const pokeType = document.getElementById("poke-type");
const pokeAbility = document.getElementById("poke-ability");
const pokeWeight = document.getElementById("poke-weight");

const statHP = document.getElementById("stat-hp");
const statAttack = document.getElementById("stat-attack");
const statDefense = document.getElementById("stat-defense");
const statSpeed = document.getElementById("stat-speed");

const evoContainer = document.getElementById("evolutions");

const apiURL = "https://pokeapi.co/api/v2/pokemon/";

// 🎨 Theme colors for types
function applyTypeTheme(type) {
  const box1 = document.querySelector('.box-1');
  const box2 = document.querySelector('.box-2');

  const typeColors = {
    fire: '#ff6b6b',
    water: '#1e90ff',
    grass: '#8bc34a',
    electric: '#f4d03f',
    psychic: '#ff69b4',
    ice: '#00e5ff',
    dragon: '#7b68ee',
    dark: '#444',
    steel: '#90a4ae',
    fairy: '#f48fb1',
    normal: '#dcdcdc',
    fighting: '#e57373',
    flying: '#81d4fa',
    poison: '#ba68c8',
    ground: '#bcaaa4',
    rock: '#a1887f',
    bug: '#aed581',
    ghost: '#9575cd'
  };

  const color = typeColors[type] || '#ff595e';
  box1.style.background = `linear-gradient(to bottom right, ${color}, #222)`;
  box2.style.background = `linear-gradient(to bottom right, ${color}, #222)`;

  document.body.style.background =
  `radial-gradient(circle at top left, ${color},#111)`;
}

// 📊 Update stats
function updateStats(stats) {
  statHP.textContent = "HP: " + stats.find(s => s.stat.name === "hp").base_stat;
  statAttack.textContent = "Attack: " + stats.find(s => s.stat.name === "attack").base_stat;
  statDefense.textContent = "Defense: " + stats.find(s => s.stat.name === "defense").base_stat;
  statSpeed.textContent = "Speed: " + stats.find(s => s.stat.name === "speed").base_stat;
}

// 🧬 Evolution chain
function fetchEvolution(speciesUrl) {
  fetch(speciesUrl)
    .then(res => res.json())
    .then(speciesData => {
      const evoUrl = speciesData.evolution_chain.url;
      return fetch(evoUrl);
    })
    .then(res => res.json())
    .then(evoData => {
      evoContainer.innerHTML = "";
      let evo = evoData.chain;
      const evoNames = [];

      while (evo) {
        evoNames.push(evo.species.name);
        evo = evo.evolves_to && evo.evolves_to[0];
      }

      evoNames.forEach(name => {
        fetch(apiURL + name)
          .then(res => res.json())
          .then(poke => {
            const img = document.createElement("img");
            img.src = poke.sprites.front_default;
            img.alt = name;
            img.title = name.toUpperCase();
            evoContainer.appendChild(img);
          });
      });
    })
    .catch(() => {
      evoContainer.innerHTML = "<p style='color:red;'>No Evolution Found</p>";
    });
}

// 🔍 Search Pokémon
searchBtn.addEventListener("click", () => {
  const name = searchInput.value.trim().toLowerCase();
  if (!name) return alert("Please enter a Pokémon name!");

  fetch(apiURL + name)
    .then(res => {
      if (!res.ok) throw new Error("Not found");
      return res.json();
    })
    .then(data => {
      const type = data.types[0].type.name;

      // Update UI
      pokeTitle.textContent = data.name.toUpperCase();
      pokeImg.src = data.sprites.front_default;
      pokeName.textContent = "Name: " + data.name.toUpperCase();
      pokeType.textContent = "Type: " + type;
      pokeAbility.textContent = "Ability: " + data.abilities[0].ability.name;
      pokeWeight.textContent = "Weight: " + data.weight + "kg";

      updateStats(data.stats);
      fetchEvolution(data.species.url);
      applyTypeTheme(type); // 🎨 Apply type theme
    })
    .catch(() => {
      alert("Pokémon not found!");
      pokeImg.src = "";
      pokeName.textContent = "Name: -";
      pokeType.textContent = "Type: -";
      pokeAbility.textContent = "Ability: -";
      pokeWeight.textContent = "Weight: -";
      statHP.textContent = "";
      statAttack.textContent = "";
      statDefense.textContent = "";
      statSpeed.textContent = "";
      evoContainer.innerHTML = "";
    });
});