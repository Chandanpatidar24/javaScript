// Mini Task

const favAnime = ['One-Piece', 'Dragon Ball', 'Smile', 'Black Clover', 'Demon Slayer'];

// Add 2 more anime
favAnime.push('Dr. Stone', 'Pokemon');

// Replace the third anime
favAnime[2] = 'I Got Reincarnated as a Slime';

// Print length and array
console.log(favAnime.length);
console.log(favAnime);

// Loop through array using forEach
favAnime.forEach(function(anime) {
    console.log(anime);
});
