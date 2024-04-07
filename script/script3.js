

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
        x:300,
		opacity:0,
		ease: 'none',
		scrollTrigger:
		{
		trigger:'.visual2',
        containerAnimation: tween,
        start: "left 70%",
		end: 'center 90%',
		// markers:true, 
		scrub:1,
		}

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
		y:100,
		opacity:0,
		ease: 'none',
		scrollTrigger:
		{
		trigger:'.pj1_box',
        containerAnimation: tween,
        start: "left 70%",
		end: 'center 90%',
		// markers:true, 
		id:'박스5',
		// scrub:1,
		},

	});

};

const fn6 = () => {
	gsap.from('.pj2_box',{
        y:100,
		opacity:0,
		ease: 'none',
		scrollTrigger:
		{
		trigger:'.pj2_box',
        containerAnimation: tween,
        start: "left 70%",
		end: 'center 90%',
		//markers:true,  //화면에 가이드선 표시
		id:'박스5',
		//scrub:1,
		},

	});

};
const fn5x = () => {
	gsap.from('.sec1',{
        x:100,
		opacity:0,
		ease: 'none',
		scrollTrigger:
		{
		trigger:'.sec1',
        containerAnimation: tween,
        start: "left 70%",
		end: 'center 90%',
		// markers:true,
		scrub:1,
		},

	});

};
const fn6x = () => {
	gsap.from('.sec2',{
        x:100,
		opacity:0,
		ease: 'none',
		scrollTrigger:
		{
		trigger:'.sec2',
        containerAnimation: tween,
        start: "-50% 70%",
		end: '0% 90%',
		//markers:true,
		scrub:1,
		},

	});

};
fn6x();
const fn7 = () => {
	gsap.from('.pj3_box',{
        y:100,
		opacity:0,
		ease: 'none',
		scrollTrigger:
		{
		trigger:'.pj3_box',
        containerAnimation: tween,
        start: "left 70%",
		end: 'center 90%',
		//markers:true,
		scrub:1,
		},

	});

};
const fn7x = () => {
	gsap.from('.sec3',{
        x:100,
		opacity:0,
		ease: 'none',
		scrollTrigger:
		{
		trigger:'.sec3',
        containerAnimation: tween,
        start: "120% 70%",
		end: '140% 90%',
		markers:true,  //화면에 가이드선 표시
		scrub:1,
		},

	});

};

fn1();fn2();fn3();fn4();fn5();fn5x();fn6();fn7();fn7x();
