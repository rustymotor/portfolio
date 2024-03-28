$(window).scroll(function () {
    var currentSCT = $(this).scrollTop();
    console.log(currentSCT);
    if (currentSCT >= 600) {
    $('.scrollright').fadeOut();
    }
    else if(currentSCT < 600){
    $('.scrollright').fadeIn();
    
}});

//패널2: 코드에 집중하고....
var span = document.querySelector(".typewriter span");
var textArr = span.getAttribute("data-text").split(", "); 
var maxTextIndex = textArr.length; 

var sPerChar = 0.15; 
var sBetweenWord = 1.5;
var textIndex = 0; 

typing(textIndex, textArr[textIndex]); 

function typing(textIndex, text) {
    var charIndex = 0; 
    var maxCharIndex = text.length - 1; 
    
    var typeInterval = setInterval(function () {
        span.innerHTML += text[charIndex]; 
        if (charIndex == maxCharIndex) {
            clearInterval(typeInterval);
            setTimeout(function() { deleting(textIndex, text) }, sBetweenWord * 1000); 
            
        } else {
            charIndex += 1; 
        }
    }, sPerChar * 1000); 
}

function deleting(textIndex, text) {
    var minCharIndex = 0; 
    var charIndex = text.length - 1; 

    var typeInterval = setInterval(function () {
        span.innerHTML = text.substr(0, charIndex); 
        if (charIndex == minCharIndex) {
            clearInterval(typeInterval);
            textIndex + 1 == maxTextIndex ? textIndex = 0 : textIndex += 1; 
            setTimeout(function() { typing(textIndex, textArr[textIndex]) }, sBetweenWord * 1000); 
        } else {
            charIndex -= 1; 
        }
    }, sPerChar * 1000); 
}
//마우스
const tg=document.querySelector('.cursor');
let mouseX=0;
let mouseY=0;
addEventListener('mousemove',(e)=>{
    mouseX=e.clientX-25+"px";
    mouseY=`${e.clientY-25}px`;
    gsap.to(tg,0.5,{left:mouseX,top:mouseY})
})

document.querySelectorAll('.panel>div').forEach((el)=>{
    let style=el.getAttribute('class');
    console.log(style);
    el.addEventListener('mouseover',()=>{
        tg.classList.add(style)
    });
    el.addEventListener('mouseout',()=>{
        tg.classList.remove(style)
    });
})

//마우스 패럴렉스
document.addEventListener('mousemove',parallax);

function parallax(e){
    this.querySelectorAll('.parallax span').forEach((el)=>{
        const pos=el.getAttribute('data-value');
        const x = (window.innerWidth - e.clientX * pos) / 90;
        const y = (window.innerHeight - e.clientY * pos) / 90; //pageX clientX 로 변경
        el.style.transform=`translateX(${x}px) translateY(${y}px)`
    });
}

//텍스트 사라짐
//문자열 분해
const text=document.querySelector('.style10>h2').innerText;
let testsplit = [...text];
console.log(testsplit);
const sp='<span>'
const an='</span>'
let textArrr=testsplit.map((char)=>{
    return sp+char+an;
}).join('');

document.querySelector('.style10>h2').innerHTML=textArrr;

let tl = gsap.timeline({
    repeat:-1, //무한반복
    repeatDelay:0.5, //반복딜레이
    yoyo:true,
    scrollTrigger:{
        trigger:'.style10',
        // markers:true,
        start:'top 50%',
        end:'+=500', //상대거리
    }

});
tl.to('.style10>h2 span',{
    opacity:0,
    y:50,
    rotateY:180,
    duration:0.5,
    stagger:0.1,

})
//제목 지퍼
