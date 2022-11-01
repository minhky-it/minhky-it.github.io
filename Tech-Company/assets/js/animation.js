// const $$ = document.querySelectorAll.bind(document);
const $1 = document.querySelector.bind(document);
let flag = false;
$1('.menu__nav').addEventListener("click",()=>{
    if(flag){
        $1('.menu__nav').style.position = 'absolute';
        $1('.menu__nav > div:first-child').style.transform = "unset";
        $1('.menu__nav > div:first-child').style.margin = "8px auto";
        $1('.menu__nav > div:last-child').style.transform = "unset";
        $1('.menu__nav > div:last-child').style.margin = "8px auto";
        $1('.menu__nav > div:nth-child(2)').style.display = 'block';
        $1('.sub-nav').style ='display: none;';
        flag = !flag;
    }else{
        
        $1('.menu__nav').style.position = 'fixed';
        $1('.menu__nav > div:first-child').style = "transform: translate(20px, 30px) rotate(-45deg); margin: 0;";
        // $1('.menu__nav > div:first-child').style.margin = "0";
        $1('.menu__nav > div:last-child').style = "transform: rotate(45deg) translateX(34px) translateY(5px); margin: 0;";
        // $1('.menu__nav > div:last-child').style.margin = "0";
        $1('.menu__nav > div:nth-child(2)').style.display = 'none';
        $1('.sub-nav').style ='display: block; z-index:9;';
        flag = !flag;
    }
});
window.onscroll = function(){
    var reveals = document.querySelectorAll('.reveal');
    for(let i = 0; i < reveals.length;i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('r_active');
        }else{
            reveals[i].classList.remove('r_active');
        }
    }
}