
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
const query = 'carrots';


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
  })
  .catch(error => console.error(error));
