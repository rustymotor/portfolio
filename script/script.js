//메인 h1
/* ==========
   textAni
========== */
(() => {
	let text1 = document.querySelector('.title h1').innerText;
	let text2 = document.querySelector('.title h2').innerText;
	let textsplit1 = [...text1];
	let textsplit2 = [...text2];

	const sp = '<span>';
	const an = '</span>';
	let textArr1 = textsplit1.map((char) => sp + char + an).join('');
	let textArr2 = textsplit2.map((char) => sp + char + an).join('');

	document.querySelector('.title h1').innerHTML = textArr1;
	document.querySelector('.title h2').innerHTML = textArr2;
	let tl = gsap.timeline({
		repeat: -1, // 무한 반복
		repeatDelay: 1, // 반복 딜레이
		yoyo: true,
	});

	tl.to('.title h2 span', {
		opacity: 1,
		y: -50,
		rotateY: 360,
		duration: 0.5,
		stagger: 0.2,
	}).to('.title h1 span', { opacity: 1, y: -50, duration: 0.5, stagger: 0.2 }, '>0.5');
})();

//구획별 gnb 표시
const eff2 = $('.eff2');
$(window).scroll(function () {
    var currentSCT = $(this).scrollTop();
   
    if (currentSCT >= 600) {
    $(eff2).css('top','20%');
    }
    else if(currentSCT < 600){
    $('.scrollright').fadeIn();
    
}});
$(window).scroll(function () {
    var currentTop = $(this).scrollTop();
   
    if (currentTop >= 0 && currentTop <= 5000) {
    $(eff2).transform;
    }
    else if(currentTop < 600){
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
  
    el.addEventListener('mouseover',()=>{
        tg.classList.add("style");
    });
    el.addEventListener('mouseout',()=>{
        tg.classList.remove("style");
    });
})

//텍스트 사라짐
//문자열 분해
// const text=document.querySelector('.style11>h2').innerText;
// let testsplit = [...text];


// const sp='<span>'
// const an='</span>'
// let textArrr=testsplit.map((char)=>{
//     return sp+char+an;
// }).join('');

// document.querySelector('.style11>h2').innerHTML=textArrr;

// let tl = gsap.timeline({
//     repeat:-1, //무한반복
//     repeatDelay:0.5, //반복딜레이
//     yoyo:true,
//     scrollTrigger:{
//         trigger:'.style11',
//         // markers:true,
//         start:'top 50%',
//         end:'+=500', //상대거리
//     }

// });
// tl.to('.style11>h2 span',{
//     opacity:0,
//     y:50,
//     rotateY:180,
//     duration:0.5,
//     stagger:0.1,

// })
//제목 지퍼
//패럴렉스/스크롤트리거 등장
const fn1 = () => {
	gsap.to('.title', {
		xPercent: -20,
		ease: 'none',
		duration: 0.5,
		scrollTrigger: {
			trigger: '.title',
			start: 'top bottom',
			end: 'bottom top',
			// markers: true,
			//scrub: true,
		},
	});
};

const fn2 = () => {
	gsap.to('.text1', {
		xPercent: -10,
		ease: 'none',
		duration: 1,
		scrollTrigger: {
			trigger: '.text1',
			start: '20% bottom',
			end: 'bottom top',
			// markers: true,
			//scrub: true,
		},
	});
};

const fn3 = () => {
	gsap.from('.visual2>img',{
		ease: 'none',
		scrollTrigger:
		{
		trigger:'.visual2',
		//첫번째는 요소기준, 두번째는 윈도우기준
		start: '200% 0%',
		end: '200% 100%',
		//markers:true,  //화면에 가이드선 표시
		id:'박스5',
		//scrub:1,
		},
		x:300,
		opacity:0
	});

};

const fn4 = () => {
	gsap.from('.project_box>.fx', {
		xPercent: -30,
		ease: 'none',
		duration: 1,
		scrollTrigger: {
			trigger: '.project_box',
			start: 'top bottom',
			end: 'bottom top',
			// markers: true,
			//scrub: true,
		},
	});
};
const fn5 = () => {
	gsap.from('.pj1_box',{
		// x: () => window.innerWidth,
		ease: 'none',
		scrollTrigger:
		{
		trigger:'.pj1_box',
		//첫번째는 요소기준, 두번째는 윈도우기준
		start: '1100% 60%',
		end: '1200% 100%',
		//markers:true,  //화면에 가이드선 표시
		id:'박스5',
		scrub:1,
		},
		y:100,
		opacity:0
	});

};
const fn5x = () => {
	gsap.from('.sec1',{
		ease: 'none',
		scrollTrigger:
		{
		trigger:'.sec1',
		//첫번째는 요소기준, 두번째는 윈도우기준
		start: '630% 0%',
		end: '730% 100%',
		//markers:true,  //화면에 가이드선 표시
		id:'박스5',
		//scrub:1,
		},
		x:100,
		opacity:0
	});

};
const fn6 = () => {
	gsap.from('.pj2_box',{
		ease: 'none',
		scrollTrigger:
		{
		trigger:'.pj2_box',
		//첫번째는 요소기준, 두번째는 윈도우기준
		start: '1850% 0%',
		end: '1950% 100%',
		//markers:true,  //화면에 가이드선 표시
		id:'박스5',
		//scrub:1,
		},
		y:100,
		opacity:0
	});

};
const fn6x = () => {
	gsap.from('.sec2',{
		ease: 'none',
		scrollTrigger:
		{
		trigger:'.sec2',
		//첫번째는 요소기준, 두번째는 윈도우기준
		start: '1050% 0%',
		end: '1200% 100%',
		//markers:true,  //화면에 가이드선 표시
		id:'박스5',
		//scrub:1,
		},
		x:100,
		opacity:0
	});

};
fn6x();
const fn7 = () => {
	gsap.from('.pj3_box',{
		ease: 'none',
		scrollTrigger:
		{
		trigger:'.pj3_box',
		//첫번째는 요소기준, 두번째는 윈도우기준
		start: '2820% 0%',
		end: '2920% 100%',
		//markers:true,  //화면에 가이드선 표시
		id:'박스5',
		//scrub:1,
		},
		y:100,
		opacity:0
	});

};
const fn7x = () => {
	gsap.from('.sec3',{
		ease: 'none',
		scrollTrigger:
		{
		trigger:'.sec3',
		//첫번째는 요소기준, 두번째는 윈도우기준
		start: '1450% 0%',
		end: '1550% 100%',
		//markers:true,  //화면에 가이드선 표시
		id:'박스5',
		//scrub:1,
		},
		x:100,
		opacity:0
	});

};

fn1();fn2();fn3();fn4();fn5();fn5x();fn6();fn7();fn7x();

//스크롤앵커
// gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

/* Main navigation */
let panelsSection = document.querySelector("#panels"),
  panelsContainer = document.querySelector("#panels-container"),
  tween;
document.querySelectorAll(".anchor").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    let targetElem = document.querySelector(e.target.getAttribute("href")),
      y = targetElem;
    if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
      let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
        totalMovement = cont.scrollWidth - innerWidth;
      y = Math.round(
        tween.scrollTrigger.start +
          (targetElem.offsetLeft / totalMovement) * totalScroll
      );
    }
    

    
    gsap.to(window, {
      scrollTo: {
        y: y,
        autoKill: false
      },
      duration: 1
    });
  });
});

/* Panels */
const cont = document.querySelector("#panels-container");
const panels = gsap.utils.toArray("#panels-container .panel");

tween = gsap.to(panels, {
  x: () => -1 * (cont.scrollWidth - innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: "#panels-container",
    pin: true,
    start: "top top",
    scrub: 1,
    end: () => "+=" + (cont.scrollWidth - innerWidth),
    onUpdate: (self) => {
      // also useful!

    }
  }
});

//목업
const pc= document.querySelector('.sec1 .pc');
const left= document.querySelector('.sec1 .left');
const mobile=document.querySelector('.sec1 .mobile');
const pcS=pc.querySelector('.sec1 .screen');
const pcM=pc.querySelector('.sec1 .mask');
const mobileS=mobile.querySelector('.sec1 .screen');
const mobileM=mobile.querySelector('.sec1 .mask');
//up
const aniUp=(mask,screen)=>{
    let newH1=mask.clientHeight;
    let newH2=screen.clientHeight;
    let height=newH1 - newH2;
    gsap.to(screen,{y:height,duration:1})
}
//down
const aniDown=(screen)=>{
    gsap.to(screen,{y:0,duration:0.5});
};
ScrollTrigger.create({
    trigger:'.sec1',
    start:'top bottom',
    end:'bottom top',
    // markers:true,
    scrub:0.5,
    onEnter:()=>{
        pcM.addEventListener('mouseenter',()=>aniUp(pcM,pcS));
        pcM.addEventListener('mouseleave',()=>aniDown(pcS));
        mobileM.addEventListener('mouseenter',()=>aniUp(mobileM,mobileS));
        mobileM.addEventListener('mouseleave',()=>aniDown(mobileS));
        gsap.fromTo(left,{xPercent:-100},{xPercent:0,duration:1})
    }
    
})
//워너디자인------------------------------------------------------------
//워너디자인------------------------------------------------------------
//워너디자인------------------------------------------------------------
const pc2= document.querySelector('.sec2 .pc');
const left2= document.querySelector('.sec2 .left');
const mobile2=document.querySelector('.sec2 .mobile');
const pcS2=pc2.querySelector('.sec2 .screen');
const pcM2=pc2.querySelector('.sec2 .mask');
const mobileS2=mobile2.querySelector('.sec2 .screen');
const mobileM2=mobile2.querySelector('.sec2 .mask');
//up
// const ani2Up=(mask,screen)=>{
//     let newH1=mask.clientHeight;
//     let newH2=screen.clientHeight;
//     let height=newH1 - newH2;
//     gsap.to(screen,{y:height,duration:1})
// }
// //down
// const ani2Down=(screen)=>{
//     gsap.to(screen,{y:0,duration:0.5});
// };
ScrollTrigger.create({
    trigger:'.sec2',
    start:'top bottom',
    end:'bottom top',
    // markers:true,
    scrub:0.5,
    onEnter:()=>{
        pcM2.addEventListener('mouseenter',()=>aniUp(pcM2,pcS2));
        pcM2.addEventListener('mouseleave',()=>aniDown(pcS2));
        mobileM2.addEventListener('mouseenter',()=>aniUp(mobileM2,mobileS2));
        mobileM2.addEventListener('mouseleave',()=>aniDown(mobileS2));
        gsap.fromTo(left2,{xPercent:-100},{xPercent:0,duration:1})
    }
    
})
//카트라이더------------------------------------------------------------
//카트라이더------------------------------------------------------------
//카트라이더------------------------------------------------------------
const pc3= document.querySelector('.sec3 .pc');
const left3= document.querySelector('.sec3 .left');
const mobile3=document.querySelector('.sec3 .mobile');
const pcS3=pc3.querySelector('.sec3 .screen');
const pcM3=pc3.querySelector('.sec3 .mask');
const mobileS3=mobile3.querySelector('.sec3 .screen');
const mobileM3=mobile3.querySelector('.sec3 .mask');

ScrollTrigger.create({
    trigger:'.sec3', 
    start:'top bottom',
    end:'bottom top',
    // markers:true,
    scrub:0.5,
    onEnter:()=>{
        pcM3.addEventListener('mouseenter',()=>aniUp(pcM3,pcS3));
        pcM3.addEventListener('mouseleave',()=>aniDown(pcS3));
        mobileM3.addEventListener('mouseenter',()=>aniUp(mobileM3,mobileS3));
        mobileM3.addEventListener('mouseleave',()=>aniDown(mobileS3));
        gsap.fromTo(left3,{xPercent:-100},{xPercent:0,duration:1})
    }
    
})
//로티 lottie 애니메이션
 //애니메이션
 const lottie = bodymovin.loadAnimation({
    container:document.querySelector('#lottie'),
    renderer:'svg',//렌더링 방식 svg/canvas/html
    loop:true,
    autoplay:true,
    path:'./LogoInitial.json',
})

 const lottie2 = bodymovin.loadAnimation({
    container:document.querySelector('#lottie2'),
    renderer:'svg',
    loop:true,
    autoplay:true,
    path:'./circle2.json',
})
 const lottie3 = bodymovin.loadAnimation({
    container:document.querySelector('#lottie_profile'),
    renderer:'svg',
    loop:true,
    autoplay:true,
    path:'./jumpingboy.json',
})
 const lottie4 = bodymovin.loadAnimation({
    container:document.querySelector('#lottie4'),
    renderer:'svg',
    loop:true,
    autoplay:true,
    path:'./deskman.json',
})
//스킬바 skillbar

///////svg 로 만드는 경우/////////////////////////////
$(function () {
	var charts = $('.charts');
	var chart = $('.chart');
	var chartOST = charts.offset().top;
	// var excuted = false;

	$(window).scroll(function () {
		var currentSCT = $(this).scrollTop();
  
		// if (currentSCT >= chartOST) {
		if (currentSCT >= 14000) {
			if (!charts.hasClass('active')) {
				animateChart();
				charts.addClass('active');
			}
		}
	});

	function animateChart() {
		chart.each(function () {
			var item = $(this);
			var title = item.find('h2');
			var targetNum = title.attr('data-num');
			var circle = item.find('circle');

			$({ rate: 0 }).animate(
				{ rate: targetNum },
				{
					duration: 1500,
					progress: function () {
						var now = this.rate;
						var amount = 505 - (505 * now) / 100;

						title.text(Math.floor(now));
						circle.css({ strokeDashoffset: amount });
					},
				}
			);
		}); //chart each
	}
});


//카페배너
const pics = $('.pic');
const lightbox=$('#lightbox');
const lightboxImage=$('#lightboxImage');

$('.row').on({
    'mouseenter':function(){
        $('.rowText').addClass('active');
    },
    'mouseleave':function(){
        $('.rowText').removeClass('active');
    }
})

$('.rowText').on('click',function(e){
    e.preventDefault();
    const bigLocation=$('.row>img').attr("data-src");
    lightbox.css('display','block');
    lightboxImage.load(bigLocation);
   
})

lightbox.on('click',function(){
    lightbox.css('display','none');
})

//visual1 패럴렉스
$(document).on('mousemove', function(e) {
    $('#panel-1 .move').each(function() {
        const pos = $(this).data('value');
        const x = (window.innerWidth - e.pageX * pos) / 90;
        const y = (window.innerHeight - e.pageY * pos) / 90;
        $(this).css('transform', `translateX(${x}px) translateY(${y}px)`);
    });
});


//contact 마우스 패럴렉스 
document.addEventListener('mousemove',parallax);

function parallax(e){
    this.querySelectorAll('.parallax span').forEach((el)=>{
        const pos=el.getAttribute('data-value');
        const x = (window.innerWidth - e.clientX * pos) / 90;
        const y = (window.innerHeight - e.clientY * pos) / 90; //pageX clientX 로 변경
        el.style.transform=`translateX(${x}px) translateY(${y}px)`
    });
}

$('.frame').on('click',function(){
	$('.figma_click').css('display','none');
})
$('.figma_click').on('click',function(){
	$('.figma_click').css('display','none');
})