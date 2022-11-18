const API_URL = 'https://ntrs.nasa.gov/api/citations/search'
const options = {method: 'POST'}
const searchInput = document.getElementById('title')
const resultContainer = document.getElementById('results-container')
const form = document.getElementById('form')

const card= document.getElementById("title")


/*card.addEventListener("submit", (e)=>{
    e.preventDefault()
    response()
})*/


form.addEventListener('submit', async (event) => {
    event.preventDefault()
    response()
    const body = JSON.stringify({title: searchInput.value})
    let results;
    const API = async () => {
        await fetch(API_URL, {method: 'POST', body: body}).then(res => res.json()).then(data => results = data).catch(e => results = [{title: 'Un satélite es un objeto que orbita (da vueltas) alrededor de un planeta.'}])
    }

    await API()
    results.forEach(result => {
        const container_info = document.querySelector("#results-container")
        const responseInfo = document.createElement("div");
        responseInfo.innerHTML = result.title

        container_info.appendChild(responseInfo);
    });
})

const response = (res) => {
    clearResponse();
    const container_res = document.querySelector(".container-res")
    const responseDiv = document.createElement("div");
    responseDiv.innerHTML = `
    <div class="card text-white bg-transparent " style="width: 15rem; height: 20rem;">
      <img class="cardE" src="../Imagenes/satelites.webp" alt="Card image cap">
      <div class="card-body">
      <div id="results-container" class="card-title"></div>
        <a href="leerMas.html" class="btn btn-primary">Leer Mas</a>
    </div>`
    container_res.appendChild(responseDiv);
}

const clearResponse = () =>{
    const responses = document.querySelector("#idResponse");
    while (responses.firstChild) {
        responses.removeChild(responses.firstChild);
    }
}