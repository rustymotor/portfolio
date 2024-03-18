// const buttons = document.querySelectorAll('button');
// for (const button of button) {
//   button.addEventListener('click', function () {
//     //선택된 button의 dataset.target명의 offsetTop을 구하는 변수를 선언한다.
//     const scrollPosition = document.querySelector(this.dataset.target).offsetLeft;

//     //scroll을 offsetTop으로 이동시킨다.
//     window.scrollTo({ left: scrollPosition, behavior: 'smooth' });
//   });
// }

const button = document.querySelector('button');
button.addEventListener("click",()=>{
  gsap.to(window, { 
  duration: 1,
  scrollTo: { y: 4000, autoKill: true },
  ease: "power2",
  });
})