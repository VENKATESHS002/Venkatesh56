var img=document.querySelectorAll('.slider img');
var dots=document.querySelectorAll('.dot');
var currentimg=0;
const interval=3000;
function changeSlide(n){
    for(var i=0;i<img.length;i++){
        img[i].style.opacity=0;
        dots[i].className=dots[i].className.replace('active','');
    }
    currentimg=n;
    imgs[currentimg].style.opacity=1;
    dots[currentimg].className+='active';
}