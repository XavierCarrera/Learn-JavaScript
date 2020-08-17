const API_URL = 'https://swapi.co/api/'
	const PEOPLE_URL = 'people/:id'

	const URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`

	$.get(URL, {crossDomain: true}, function(){ }) 