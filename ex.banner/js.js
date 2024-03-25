//썸네일 이미지
const pics = document.querySelectorAll('.pic');

//박스
//dim요소, 페이지가 열릴요소
const lightbox=document.querySelector('#lightbox');
const lightboxImage=document.querySelector('#lightboxImage');


for(let i =0;pics.length>i;i++){
    pics[i].addEventListener('click',showLightbox);
}


//load 함수
//자바스크립트의 비동기통신
async function showLightbox(){
    const bigLocation=this.getAttribute('data-src');
    try { //통신성공시: jquery의 success와 같다.
        const response = await fetch(bigLocation);
        console.log(response);

        if(!response.ok){
            throw new Error(`HTTP 에러남 status:'${response.status}`);
        }
        
        const htmlContent=await response.text();
        lightbox.style.display="block";
        document.querySelector('html').classList.add('all_scroll_fixed');
        lightboxImage.innerHTML = htmlContent;

    } catch (error) { //통신실패시 출력할 문구
        console.log(error);
    }
}
lightbox.onclick=function(){
    lightbox.style.display='none';
    document.querySelector('html').classList.remove('all_scroll_fixed');
}
/* 통신성공:200
니잘못:400
내잘못:500 */
/* 자바스크립트에서 비동기처리를 지원하는 async,await키워드를 사용하여 fetch함수로 통신을 구현하였습니다 */