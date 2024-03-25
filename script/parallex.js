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
			scrub: true,
		},
	});
};



const fn3 = () => {
	gsap.from('.visual2',{
		ease: 'none',
		scrollTrigger:
		{
		trigger:'.visual2',
		//첫번째는 요소기준, 두번째는 윈도우기준
		start: '100%s bottom',
		end: 'bottom top',
		markers:true,  //화면에 가이드선 표시
		id:'박스5',
		scrub:1,
		},
		x:300,
		opacity:0
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
			scrub: true,
		},
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
			scrub: true,
		},
	});
};
fn4();
fn1();
fn2();
fn3();