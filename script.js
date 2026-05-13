button = document.getElementById("boton");
button.addEventListener("click", () => {
    fetch("https://rickandmortyapi.com/api/character")
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    const personajes = datos.results; 
    const indiceAleatorio = Math.floor(Math.random() * personajes.length);
    const personaje = personajes[indiceAleatorio];
      document.getElementById("personajes").innerHTML = `
        <div class="col-md-3 mb-4">
            <div class="card">
                <img src="${personaje.image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">
                ${personaje.name}
                </h5>
                <p>
                ${personaje.species}
                </p>
                ${personaje.status}
            </div>
            </div>
        </div>
        `;
            });
        });
