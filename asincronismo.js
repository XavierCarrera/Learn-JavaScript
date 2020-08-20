// const API_URL = 'https://swapi.co/api/'
// 	const PEOPLE_URL = 'people/:id'

//     const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
//     const opts = { crossDomain: true}

// 	$.get(URL, {crossDomain: true}, function(){ 
        

//     }) 

const API_URL = "https://swapi.dev/api/"
const PEOPLE_URL = "people/:id"
const opts = { crossDomain: true }

// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}` 
// const opts = { crossDomain: true }

const onPeopleResponse = function (persona) {
    console.log(`Hola, you soy ${persona.name}`)
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', 1)}` 
    $.get(url, opts, onPeopleResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)