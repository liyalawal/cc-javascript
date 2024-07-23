let song=`Sometimes, all I think about is you
Late nights in the middle of June
Heat waves been fakin' me out
Can't make you happier now`;
console.log(song.match(/a/g));
let lyrics  = `Sometimes, all I think about is you
Late nights in the middle of June
Heat waves been fakin' me out
Can't make you happier now`

function song(lyrics){

    let count=0

    for(let i=0; i<lyrics.length; i++){
        if(lyrics[i] === 'a'){
            count++
        }
    }  return count

}

console.log(song(lyrics))
// i means case insensitive
// let newLyrics =song.replace('you','Tems');
// to replace the first  one
// let newLyrics =song.replace(/You/gi,'Tems');
// g means to replace global
// you can have as many modifiers

// console.log(newLyrics)
// console.log(song[75],song[76],song[77],song[78],song[79])
// console.log(/you/ig.exec(song));
