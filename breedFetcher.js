const request = require('request');

const breed = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const data = JSON.parse(body);
  try {
    console.log(`Description: ${data[0].description}`);
  } catch (err) {
    console.log('Not found');
  }
  
});