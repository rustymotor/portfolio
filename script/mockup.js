const pc= document.querySelector('.sec3 .pc');
const left= document.querySelector('.sec3 .left');
const mobile=document.querySelector('.sec3 .mobile');
const pcS=pc.querySelector('.screen');
const pcM=pc.querySelector('.mask');
const mobileS=mobile.querySelector('.screen');
const mobileM=mobile.querySelector('.mask');
//up
const aniUp=(mask,screen)=>{
    let newH1=mask.clientHeight;
    let newH2=screen.clientHeight;
    let height=newH1 - newH2;
    gsap.to(screen,{y:height,duration:0.5})
}
//down
const aniDown=(screen)=>{
    gsap.to(screen,{y:0,duration:0.5});
};
ScrollTrigger.create({
    trigger:'body',
    start:'top top',
    end:'bottom bottom',
    markers:true,
    scrub:0.5,
    onEnter:()=>{
        pcM.addEventListener('mouseenter',()=>aniUp(pcM,pcS));
        pcM.addEventListener('mouseleave',()=>aniDown(pcS));
        mobileM.addEventListener('mouseenter',()=>aniUp(mobileM,mobileS));
        mobileM.addEventListener('mouseleave',()=>aniDown(mobileS));
        gsap.fromTo(left,{xPercent:-100},{xPercent:0,duration:1})
    }
    
})