
///////svg 로 만드는 경우/////////////////////////////
$(function () {
	var charts = $('.charts');
	var chart = $('.chart');
	var chartOST = charts.offset().top;
	// var excuted = false;
	// console.log(excuted);
	$(window).scroll(function () {
		var currentSCT = $(this).scrollTop();
    console.log(currentSCT);
    console.log(chartOST + 'dd');
		// if (currentSCT >= chartOST) {
		if (currentSCT >= 14300) {
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
						var amount = 630 - (630 * now) / 100;

						title.text(Math.floor(now));
						circle.css({ strokeDashoffset: amount });
					},
				}
			);
		}); //chart each
	}
});

////////gsap///////////////////////////////////////////////

const circles = document.querySelectorAll(".circular-pbar");

circles.forEach((el) => {
  const counter = el.querySelector(".circular-pbar-counter"); //각 요소 내부에 있는 이거 찾아라
  console.log(counter.textContent);
  const tg = counter.textContent + "%"; //counter에 있는 텍스트를 의미
  console.log(tg);
  //counter.textContent = tg;
  const tm = gsap.timeline(
    //여러 개의 요소 타임라인을 하나로 묶는다.
    {
      defaults: { duration: 4, ease: "expo out" },
      scrollTrigger: {
        trigger: '.panel-7',
        toggleActions: "play pause resume reset", //처음 두 개는 최초 트리거,그 뒤에 두 개는 다시왔을 때
        //최초로 요소에 진입하면
      },
    }
  );


  tm.from(counter, {
    textContent: 0, //초기 텍스트 시작값
    modifiers: { //텍스트를 변환함
      textContent: (textContent) => {
          console.log(textContent);
        return textContent.toFixed(); //toFixed는 숫자열의 소숫점을 가져옴. 근데 안 넣어서 정수만 가져옴.
      },
    },
  });

  
  tm.to(el,  //p를 span에 있는 숫자로 이동시킴
    { "--p": tg },0);
  
});

