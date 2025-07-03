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

// Helper: update stats
function updateStats(stats) {
  statHP.textContent = "HP: " + stats.find(s => s.stat.name === "hp").base_stat;
  statAttack.textContent = "Attack: " + stats.find(s => s.stat.name === "attack").base_stat;
  statDefense.textContent = "Defense: " + stats.find(s => s.stat.name === "defense").base_stat;
  statSpeed.textContent = "Speed: " + stats.find(s => s.stat.name === "speed").base_stat;
}

// Helper: fetch evolution chain
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

      // Traverse evolution chain
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
    .catch(err => {
      evoContainer.innerHTML = "<p style='color:red;'>No Evolution Found</p>";
    });
}

// Main fetch function
searchBtn.addEventListener("click", () => {
  const name = searchInput.value.trim().toLowerCase();
  if (!name) return alert("Please enter a Pokémon name!");

  fetch(apiURL + name)
    .then(res => {
      if (!res.ok) throw new Error("Not found");
      return res.json();
    })
    .then(data => {
      // Update basic info
      pokeTitle.textContent = data.name.toUpperCase();
      pokeImg.src = data.sprites.front_default;
      pokeName.textContent = "Name: " + data.name.toUpperCase();
      pokeType.textContent = "Type: " + data.types[0].type.name;
      pokeAbility.textContent = "Ability: " + data.abilities[0].ability.name;
      pokeWeight.textContent = "Weight: " + data.weight + "kg";

      // Update stats
      updateStats(data.stats);

      // Fetch evolution chain
      fetchEvolution(data.species.url);
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