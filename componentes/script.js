const API_URL = 'https://ntrs.nasa.gov/api/citations/search'
const options = {method: 'POST'}
const searchInput = document.getElementById('title')
const resultContainer = document.getElementById('results-container')
const form = document.getElementById('form')

form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const body = JSON.stringify({title: searchInput.value})
    let results;
    const API = async () => {
        await fetch(API_URL, {method: 'POST', body: body}).then(res => res.json()).then(data => results = data).catch(e => results = [{title: 'Un satélite es un objeto que orbita (da vueltas) alrededor de un planeta.'}])
    }

    await API()
    results.forEach(result => {
        const div = document.createElement('div')
        div.classList.add('result-card')
        div.innerHTML = result.title
        resultContainer.append(div)
    });
})


console.log('pruebaa')
