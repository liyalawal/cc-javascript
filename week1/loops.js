// for(let count= 1; count <= 5; count= count + 2){
//     console.log('hello');
// }
// for (count = 10; count >= 1; count =count - 1 ){
//     console.log(count)
//     // console.log('Happy New Year')
// }
// console.log('Happy')

// let start=1 
// while(start< 10){
//     console.log('This is a while loop');
//     start= start +1;}


    // console.log('infinite loop');
    // INPUT 

    while(true){

let number= prompt("Type in a number\nType 'close' to end the program ");
let message ='';

if(number==='close'||number==='Close'){
    break;
}

// PROCESSING
if (number % 2 === 0){
    message='This is an even number';
}
else{
    message= 'This is an odd number';
    
}
//OUTPUT
alert(message);
}