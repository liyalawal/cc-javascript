async function displayInfo() {
    // save the UPI in a string variable
    let url = 'https://catfact.ninja/fact'

    // use fetch to get a response from the server
    let response = await fetch(url);
    // console.log(response)

    // collect JSON response
    let randomCatFact = await response.json();
    // console.log(randomCatFact);
    console.log(randomCatFact.fact);

};

displayInfo();