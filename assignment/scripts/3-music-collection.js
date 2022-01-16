console.log('***** Music Collection *****')

let collection = [];

// start of function
function addToCollection(yearPublished, artist, title) {
  let music = {
  albumYearPublished: yearPublished,
  albumArtist: artist,
  albumTitle: title,
  }
collection.push(music);
return music;
}

console.log(addToCollection("2005", "Coldplay", "X&Y" ));
console.log(collection); //finished funtionality of the function

// Adding albums:
console.log(addToCollection("1976", "Eagles", "Hotel California"));
console.log(addToCollection("2021", "Kanye West", "Donda"));
console.log(addToCollection("2000", "Coldplay", "Parachutes"));
console.log(addToCollection("2013", "Childish Gambino", "Because the Internet"));
console.log(addToCollection("2017", "Tyler, The creator", "Flower Boy"));
console.log(collection);
// finished adding albums

function showCollection(array){
//let arrayLength = music.length;
  console.log(array.length);
  for (var i of array) {
    console.log(`${i.albumTitle} by ${i.albumArtist}, Published in ${i.albumYearPublished}`);
  }
  return 0;
}
console.log(showCollection(collection));

function findByArtist(artist){
  let array = [];
  console.log(collection);
  for (var i = 0; i < collection.length; i++) {
  //for (let music of collection) {
    // console.log("Inside loop: " + music.albumArtist);
    // console.log("Before if:|" + artist + "|");
     if (collection[i].albumArtist === artist) {
      array.push(collection[i]);
      console.log("Adding: " + (collection[i]));
    //}
  }
}
  return array;
  }

console.log(findByArtist("Kanye West"));
