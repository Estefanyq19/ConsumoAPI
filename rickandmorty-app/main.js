import axios from 'axios'
import './style.css'

document.getElementById('app').innerHTML = `
<h1>Rick and Morty App </h1>
<section id="character-container" class="container"></section>
`

const getCharacters = async() => {
  try{
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    
    const characters = data.results
    const charactersContainer = document.getElementById('character-container')

    characters.map(character => {
      const characterElement = document.createElement('div')
      characterElement.innerHTML = `
      <div class="card">
      <img src="${character.image}" alt="${character.name}">
      <h2>${character.name}</h2>
      <p>${character.species}</p>
      <p>${character.status}</p>
      </div>
    `
    charactersContainer.appendChild(characterElement)
  })

  }catch(error){
    console.log(error)
  }
}

const getLocations = async () => {
  const response = await axios.get('https://rickandmortyapi.com/api/location')
  console.log(response.data)
}

getCharacters()
getLocations()