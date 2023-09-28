function catReplacer() {
  //declare a variable, 'catImages', and assign it to an array with paths to cat images
  const catImages = [
    'https://shorturl.at/EKLZ8',
    'https://shorturl.at/dsVX9',
    'https://shorturl.at/dhlyS',
    'https://shorturl.at/oGSV2',
    'https://shorturl.at/cpDJS',
    'https://shorturl.at/amnKN',
    'https://shorturl.at/otxIM',
    'https://shorturl.at/ltQU6',
    'https://shorturl.at/bLMT3',
    'https://shorturl.at/yzOPW',
    'https://shorturl.at/kzFNO',
    'https://shorturl.at/pxTW3',
    'https://shorturl.at/aqIL1',
  ];

  //get all images on page and store in an array
  const allImages = document.querySelectorAll('img');
  const moreAllImages = document.querySelectorAll('source');
  //loop through array of site images and for each el, replace the 'src' property with
  //the local path to cat image

  allImages.forEach(img => {
    img.src = catImages[Math.floor(Math.random() * (0 + 12) - 0)];
    img.srcset = catImages[Math.floor(Math.random() * (0 + 12) - 0)];
  });

  moreAllImages.forEach(img => {
    img.src = catImages[Math.floor(Math.random() * (0 + 12) - 0)];
    img.srcset = catImages[Math.floor(Math.random() * (0 + 12) - 0)];
  });
}

// let randomNum = Math.floor(Math.random() * (1000 + 10000) - 1000);

setInterval(() => catReplacer(), 5000);

//Possible way to run catReplacer at random intervals
// function myFunction() {
//   alert('oo');
//   setTimeout(myFunction, Math.random() * 5000)
// }

// myFunction()
