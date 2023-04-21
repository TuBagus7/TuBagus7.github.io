// function loadData(){
//     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then((respon) => respon.json())
//     .then((data) =>{
//         console.log(data);
//     })
//     .catch((err) =>{
//         console.log('Pokemon not found',err)
//     })
// }
// loadData();

fetch ('https://pokeapi.co/api/v2/pokemon')
.then(
    function(response){
        if(response.status != 200){
            console.log('error' + response.status)
            return
        }
        response.json().then(function(data){
            const pokemons = data.results
            pokemons.forEach(pokemon => {
                document.getElementById('pokemonList')
                .insertAdjacentHTML('beforeend',
                    `<li onclick = 'detail("${pokemon.url}")'> ${pokemon.name}</li>`
                )
            });
        })
    })
.catch(function(error){
    console.log(error)
})

function detail(url){
    fetch(url).then(function(response){
        response.json().then(function(pokemon){

            document.getElementById('detail').innerHTML=''

            document.getElementById('detail')
            .insertAdjacentHTML('beforeend',
                `<h3>${pokemon.name}</h3>
                <img src = '${pokemon.sprites.front_default}'>
                <p>Height : ${pokemon.height}</p>
                <p>Weight : ${pokemon.weight}</p>
                
                `
            )

        })
    })
}
