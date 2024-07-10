const names=[]

while (true){
    let input = prompt('Type in your name. \nType "done" to exist.')
  
    if (input == 'done'){
        break;
    }
    names.push(input);
}
alert(names + '\n' + 'Total; ' +names.length)