async function getJSON(url='http://localhost:3000/assets/pets.json') {
    const response = await fetch(url);
    return await response.json()
}
let animals = getJSON();
console.log(animals)