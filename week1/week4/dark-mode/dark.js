let darkText=document.getElementsByTagName('span')[0]
let sun= document.getElementsByTagName('span')[0].children[0]
let toggle= document.getElementsByTagName('span')[0].children[1]
let isDark=true
console.log(toggle)

toggle.addEventListener('click',function(){
    if (isDark){
        this .setAttribute('src','bxs-toggle-right.svg')
   document.body.style.color = 'purple'
   document.body.style.backgroundColor='black';
   isDark=false;
    }else{
        this.setAttribute('src','bx-toggle-left.svg')
   document.body.style.color = 'aqua'
   document.body.style.backgroundColor='white';
   isDark=true;
    }
})