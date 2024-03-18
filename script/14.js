gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
const sections=gsap.utils.toArray('.panel');
const main = document.querySelector('main');

const move = gsap.to(sections,{
    xPercent:-100 * (sections.length-1),
    ease:'none',
    scrollTrigger:{
        trigger:'main',
        pin:true,
        scrub:1,
        // snap:1 / (sections.length - 1),
        end:() => '+=' + document.querySelector('main').offsetWidth,
    }
});
console.log(ScrollTrigger.isTouch);
if(ScrollTrigger.isTouch>0){
    
}

// 이건 앵커


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
    
    console.log('useful stuff!', y, e.target.getAttribute("href"));
    
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
// const cont = document.querySelector("#panels-container");
// const panels = gsap.utils.toArray("#panels-container .panel");

// tween = gsap.to(panels, {
//   x: () => -1 * (cont.scrollWidth - innerWidth),
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#panels-container",
//     pin: true,
//     start: "top top",
//     scrub: 1,
//     end: () => "+=" + (cont.scrollWidth - innerWidth),
//     onUpdate: (self) => {
//       // also useful!
//      // console.log(self.progress, '/1')
//      // console.log(window.scrollY, `/${document.body.scrollHeight - window.innerHeight}`)
//     }
//   }
// });