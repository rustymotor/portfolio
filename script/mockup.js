const pc= document.querySelector('.sec3 .pc');
const left= document.querySelector('.sec3 .left');
const mobile=document.querySelector('.sec3 .mobile');
const pcS=pc.querySelector('.sec3 .screen');
const pcM=pc.querySelector('.sec3 .mask');
const mobileS=mobile.querySelector('.sec3 .screen');
const mobileM=mobile.querySelector('.sec3 .mask');
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
    trigger:'.sec3',
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
const pc2= document.querySelector('.sec4 .pc');
const left2= document.querySelector('.sec4 .left');
const mobile2=document.querySelector('.sec4 .mobile');
const pcS2=pc2.querySelector('.sec4 .screen');
const pcM2=pc2.querySelector('.sec4 .mask');
const mobileS2=mobile2.querySelector('.sec4 .screen');
const mobileM2=mobile2.querySelector('.sec4 .mask');
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
    trigger:'.sec4',
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