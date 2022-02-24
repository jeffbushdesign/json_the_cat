// request library
const request = require('request');

// receive breed name as command line input
let breed = process.argv.slice(2);

// generate the url to make an api request
let baseUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';
let search = baseUrl + breed;


// make a request
request(`${search}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML 

  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  console.log(data[0]['description']);
});

// How to use this code
// Input: node breedFetcher.js typeABreedName
// Output: Consults cat api and returns description of the cat breed you entered

