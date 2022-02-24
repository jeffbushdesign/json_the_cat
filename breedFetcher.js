// request library
const request = require('request');

// receive breed name as command line input
let breed = process.argv.slice(2);

// generate the url to make an api request
let baseUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';
let search = baseUrl + breed;


// make a request
request(`${search}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  }
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML 
  if (data.length < 1) {
    console.log("Sorry, we can't find that breed of cat.\nPlease try another breed.");
  } else {
    console.log(data[0]['description']);
  }
  // console.log(data);
  // console.log(typeof data);
  // console.log(data[0]['name']);
});

// How to use this code
// Input: node breedFetcher.js typeABreedName
// Output: Consults cat api and returns description of the cat breed you entered

