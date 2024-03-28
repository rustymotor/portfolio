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