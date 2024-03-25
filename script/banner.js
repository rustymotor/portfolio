const pics = $('.pic');
const lightbox=$('#lightbox');
const lightboxImage=$('#lightboxImage');
pics.on('click',function(e){
    e.preventDefault();
    const bigLocation=$(this).attr("data-src");
    lightbox.css('display','block');
    lightboxImage.load(bigLocation);
    console.log(lightboxImage);
})

lightbox.on('click',function(){
    lightbox.css('display','none');
})

