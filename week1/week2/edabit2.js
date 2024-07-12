function middleEarth(arr) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === 'Frodo' || arr[i] === 'Sam') {
            if (arr[i + 1] === 'Frodo' || arr[i + 1] === 'Sam') {
                return true;
            } else {
                return false;
            }
        }
        i++
    }
}
// console.log(middleEarth(["Frodo", "Sam", "Gandalf"]));


function sortByLength(arr){
    let newArray=[];
    newArray=arr.sort(function(a,b){return a.length - b.length});
    return newArray;
}

console.log(sortByLength(['Google','Apple','Microsoft']));


function largeAndSmall(a,b,c){
    if (a<b && a<c){
        return 'Smallest: ' + a;
         } else if(b<a && b<c){
            return'Smallest: '+ b;
         }else{
            return 'Smallest: ' + c;
         }
       }
console.log(largeAndSmall(900,7870,8))



// function largeAndSmall(numbers){
//     if(numbers.length===0)
//     {return "The array is empty";}



// let largest=numbers[0];
// let smallest=numbers[0];

// for(let i=1;i<numbers.length;i++){
//     if (numbers[i] >largest){
//         largest =numbers[i];

//     }
//     if (numbers[i]<smallest){
//         smallest=numbers[i];
//     }
// }
//     return`Largest number:${largest}, Smallest number:${smallest};`

// }
// let numbers=[34,89,98,9,976];
// let result=largeAndSmall(numbers);
// console.log(result)