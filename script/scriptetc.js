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
    scrub: 0.1,
    end: () => "+=" + (cont.scrollWidth - innerWidth),
    onUpdate: (self) => {
      // also useful!

    }
  }
});

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
	var chartOST = charts.offset().left;
	// var excuted = false;

	$(window).scroll(function () {
		var currentSCT = $(this).scrollTop();
		if (currentSCT >= (chartOST - 500)) {
		// if (currentSCT >= 14000) {
            console.log(currentSCT);
            console.log(chartOST);
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

