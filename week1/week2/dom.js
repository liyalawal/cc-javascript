// let newHeading= document.getElementById('heading');
// newHeading.innerHTML='Welcome to DOM manipulation';
// // .textContent does the same displays without tags
// let newList= document.getElementById('list');
// console.log(newList.textContent)
// // inner.HTML displays the tags

let newMainHeading = document.getElementById('mainHeading');
let sub = document.getElementsByClassName('subheading');

for (let i = 0; i < sub.length; i++) {
    sub[i].innerHTML = 'Javascript is easy'

}


let lorem = document.getElementsByClassName('lorem');

for (let i = 0; i < lorem.length; i++) {
    lorem[i].innerHTML = 'Javascript is not easy'
}
let newh2 = document.getElementsByTagName('h2');
for (let i = 0; i < newh2.length; i++) {
    newh2[i].innerHTML = 'Javascript go whine you but no panic'

}

// +=adds to the other 
let newElement = document.createElement('img');
newElement.setAttribute('src', 'IMG_7736.PNG');
lorem[1].appendChild(newElement);