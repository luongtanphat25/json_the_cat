const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request.get(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
  
    const data = JSON.parse(body);
    try {
      callback(null, data[0].description);
    } catch (err) {
      callback('Not found', null);
    }
    
  });
};

module.exports = { fetchBreedDescription };