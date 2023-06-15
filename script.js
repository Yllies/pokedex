// Insert your code here

for (let i = 1; i <= 12; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    .then((res) => res.json())
    .then((data) => {
      const urlImg = data.sprites.front_default;
      const type = data.types[0].type.name;
      const typeFormat = type.replace(type[0], type[0].toUpperCase());

      const name = data.name;
      const nameFormat = name.replace(name[0], name[0].toUpperCase());

      document.querySelector("#pokemonContainer").innerHTML += `
        <div class="pokemon ${type}">
        <div class="imgContainer">
            <img src="${urlImg}" />
        </div>
        <div class="info">
            <h3 class="name">${nameFormat}</h3>
            <span class="type">Type : <span>${typeFormat}</span></span>
        </div>
    </div>
          `;
    });
}

let offset = 1;
if (offset === 1) {
  document.querySelector("#previous").style.display = "none";
}

document.querySelector("#next").addEventListener("click", function () {
  offset = offset + 11;

  if (offset === 1) {
    document.querySelector("#previous").style.display = "none";
  } else {
    document.querySelector("#previous").style.display = "flex";
  }
  document.querySelector("#pokemonContainer").innerHTML = "";
  for (let i = offset + 1; i <= offset + 12; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      .then((res) => res.json())
      .then((data) => {
        const urlImg = data.sprites.front_default;
        const type = data.types[0].type.name;
        const typeFormat = type.replace(type[0], type[0].toUpperCase());
        const name = data.name;
        const nameFormat = name.replace(name[0], name[0].toUpperCase());
        document.querySelector("#pokemonContainer").innerHTML += `
                  <div class="pokemon ${type}">
                  <div class="imgContainer">
                      <img src="${urlImg}" />
                  </div>
                  <div class="info">
                      <h3 class="name">${nameFormat}</h3>
                      <span class="type">Type : <span>${typeFormat}</span></span>
                  </div>
              </div>
                    `;
      });
  }
});

document.querySelector("#previous").addEventListener("click", function () {
  offset = offset - 11;
  if (offset === 1) {
    document.querySelector("#previous").style.display = "none";
  } else {
    document.querySelector("#previous").style.display = "flex";
  }

  document.querySelector("#pokemonContainer").innerHTML = "";
  for (let i = offset; i <= offset + 11; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      .then((res) => res.json())
      .then((data) => {
        const urlImg = data.sprites.front_default;
        const type = data.types[0].type.name;
        const typeFormat = type.replace(type[0], type[0].toUpperCase());
        const name = data.name;
        const nameFormat = name.replace(name[0], name[0].toUpperCase());
        document.querySelector("#pokemonContainer").innerHTML += `
                          <div class="pokemon ${type}">
                          <div class="imgContainer">
                              <img src="${urlImg}" />
                          </div>
                          <div class="info">
                              <h3 class="name">${nameFormat}</h3>
                              <span class="type">Type : <span>${typeFormat}</span></span>
                          </div>
                      </div>
                            `;
      });
  }
});

document.querySelector("#btn-search").addEventListener("click", function () {
  const pokemonSearch = document
    .querySelector("#search-pokemon")
    .value.toLowerCase();
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}/`)
    .then((res) => res.json())
    .then((data) => {
      const urlImg = data.sprites.front_default;
      const type = data.types[0].type.name;
      const typeFormat = type.replace(type[0], type[0].toUpperCase());
      const name = data.name;
      const nameFormat = name.replace(name[0], name[0].toUpperCase());
      document.querySelector("#pokemonContainer").innerHTML = ``;
      document.querySelector("#pokemonContainer").innerHTML += `
                        <div class="pokemon ${type}">
                        <div class="imgContainer">
                            <img src="${urlImg}" />
                        </div>
                        <div class="info">
                            <h3 class="name">${nameFormat}</h3>
                            <span class="type">Type : <span>${typeFormat}</span></span>
                        </div>
                    </div>
                          `;

      document.querySelector("#search-pokemon").value = "";
    });
});
