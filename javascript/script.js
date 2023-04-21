

const apiKey = 'gF78d3xpyTjWRcRmQlGJTg==ElsLxWJ8t8OFYxFd';
let query = 'carrots';

let searchbar = document.querySelector('#searchbar');
let searchbutton = document.querySelector('#searchbutton')
let outputElement = document.querySelector('#output');


searchbutton.addEventListener('click', ()=>{
  console.log(searchbar.value);
  query = searchbar.value;
  console.log(query);

  
  fetch(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, {
    headers: {
      'X-Api-Key': apiKey
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Request failed with status code ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      outputElement.innerHTML = `Calories: ${data.items[0].calories}`;
      
    })
    .catch(error => console.error(error));
     
  

})
