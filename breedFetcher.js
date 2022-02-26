// request library
const request = require('request');

// receive breed name as command line input
// 

// generate the url to make an api request
// let baseUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';
// let search = baseUrl + breed;


// make a request


const fetchBreedDescription = function (breedName, callback) {
  let baseUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(`${baseUrl}`, (error, _response, body) => {
    const data = JSON.parse(body);
    if (error) {
      // console.log('error:', error); // Print the error if one occurred
      return callback(error, null);
    }
    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
    } else {
      // 
      callback('Breed not found');
    }
  });
};

module.exports = { fetchBreedDescription };


// How to use this code
// Input: node breedFetcher.js typeABreedName
// Output: Consults cat api and returns description of the cat breed you entered



// ---- BEFORE REFACTOR -----
// // request library
// const request = require('request');

// // receive breed name as command line input
// let breed = process.argv.slice(2);

// // generate the url to make an api request
// let baseUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';
// let search = baseUrl + breed;


// // make a request
// request(`${search}`, (error, response, body) => {
//   const data = JSON.parse(body);
//   if (error) {
//     console.log('error:', error); // Print the error if one occurred
//   }
//   if (data.length < 1) {
//     console.log("Sorry, we can't find that breed of cat.\nPlease try another breed.");
//   } else {
//     console.log(data[0]['description']);
//   }
// });

// // How to use this code
// // Input: node breedFetcher.js typeABreedName
// // Output: Consults cat api and returns description of the cat breed you entered

