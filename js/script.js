var Bars=document.querySelector('#ToggleBar');
var mobile_menu=document.querySelector('.mobile_menu');
var videoPlay=document.querySelector('#videoPlay');
var video=document.querySelector('.video');
var videoColose=document.querySelector('#videoColose');
Bars.onclick=()=>{
    Bars.classList.toggle('fa-times')
    mobile_menu.classList.toggle('MenuOpen');
}

$(document).ready(function (){
    $('.navbar').stickify({
reverse: true,
    });
});