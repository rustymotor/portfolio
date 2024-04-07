
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
		x: () => window.innerWidth,
		ease: 'none',
		scrollTrigger:
		{
		trigger:'.pj1_box',
		//첫번째는 요소기준, 두번째는 윈도우기준
		start: 'left top',
		end: 'left 100%',
		markers:true,  //화면에 가이드선 표시
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
