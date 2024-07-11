// q1
// function sum(a,b){ 
//     return a+b;
// }
//  console.log(sum(3,2));
// console.log(sum(-3,-6));
// console.log(sum(7,3));


// q2
function addition(x){
    return x+1;
}
console.log(4)
console.log(7)

// q3
// function fiftythirtytwenty(y){
//     return {"Needs":y*0.5,"Wants":y*0.3,"Swings":y*0.2}
// }
// console.log( fiftythirtytwenty(2000))


// another way q3
// function fiftythirtytwenty(y){
//     let needs =50/100* y;
//     let wants=30/100*y;
//     let savings=20/100*y;
//     return {'Needs':needs, 'Wants':wants,'Savings':savings}
// }
// console.log(fiftythirtytwenty(100000))

// // q4
// function TwoMakesTen(a,b){
//     if ((a===10||b===10)||a+b===10){
//       return(true);
//       }
//       else{
//         return(false)
//       }
//     }
//     console.log(TwoMakesTen(9,7))

    // q5
    function MovieTheatreAdmittance(a,b){
        if (a>=15||b==='true'){
            return(true)
        }
        else{return(false)}
    }
    console.log (MovieTheatreAdmittance(12,false))

    function CenturyFromYear(x){
        return Math.ceil(x/100) +'st Century'
    }
    console.log(CenturyFromYear(2009)) 

    // q6
    function countDs(sentence){
        let count=0;

        for (let i=0; i<sentence.length;i++){
                if(sentence[i]==='d'||sentence[i]==='D') {
                    count++; 
                }
            }
            return count;
        }
       
    
    console.log(countDs('make a diff difference'))