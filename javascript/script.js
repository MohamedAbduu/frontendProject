
// this is for the responsive icon for all navbar pages 
    let menu = document.querySelector('#Menu-btn');
    let navbar = document.querySelector('.nav-bar')
    menu.onclick = () =>{
        menu.classList.toggle('fa-times')
        navbar.classList.toggle('active')
    }
// ----- end of navbar icon  -------------------------------------------------
// var query = '3lb carrots and a chicken sandwich'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
//     headers: { 'X-Api-Key': 'gF78d3xpyTjWRcRmQlGJTg==ElsLxWJ8t8OFYxFd'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });




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
