// function formatPhoneNumber(numbers) {
//     // Ensure numbers array has exactly 10 elements
//     if (numbers.length !== 10) {
//         throw new Error('Input array must contain exactly 10 numbers');
//     }

//     // Destructure array elements into variables for formatting
//     let [a, b, c, d, e, f, g, h, i, j] = numbers;

//     // Format the phone number
//     let formattedNumber = `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`;

//     return formattedNumber;
// }

// // Example usage:
// let numbers = [5, 5, 5, 1, 2, 3, 4, 5, 6, 7];
// let formattedNumber = formatPhoneNumber(numbers);
// console.log(formattedNumber); 


function formatPhoneNumber(arr){
    let phone='(';

    for(let i=0;i<arr.length;i++){
        phone+=arr[i];
        if(i===2){
            phone+=') '
        }
        if(i===5){
            phone+='-'
        }
    }
    return phone;
}
console.log(formatPhoneNumber([1,2,3,3,5,5,6,7,6,6]))