const path = 'https://coronavirus-19-api.herokuapp.com/countries'

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

// Não é recomendado o uso fetch por várias limitações como segurança e nem todos browsers aceitam
// Nelhor utilizar o axios ou o bent acredito
function getCountry(country) {
    return fetch(`${path}/${country}`, headers)
    .then((response) => response.json())
}

// eslint-disable-next-line
export default {
    getCountry
}