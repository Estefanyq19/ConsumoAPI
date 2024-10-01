function getCharacteres(){
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      console.log(data.results)
      const characters = data.results
      const charactersContainer = document.getElementById('app')
      
      characters.map(character => {
        const characterElement = document.createElement('div')
        characterElement.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h1>${character.name}</h1>
      `
      charactersContainer.appendChild(characterElement)
    })
  })
  
  .catch(error => {
    console.log(error)
    const charactersContainer = document.getElementById('app')
    charactersContainer.innerHTML = `
    <h2>Error en obtener los datos</h2>
    `
  })
  }
  
  getCharacteres()