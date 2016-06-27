$(function(){

             imageIndex = 1;
             nextImgIndex = imageIndex + 1
 imageCount = $('ul li').length;
     nextImage = $('ul li:nth-child('+nextImgIndex+')');
    nextImageWidth = $(nextImage).width()
     currentImage = $('ul li:nth-child('+imageIndex+')');
 imageCentrePosition = ($(window).width() - nextImage.width()) / 2
 imagePositioning = (nextImageWidth + imageCentrePosition)
$('.innerContainer').css('left', imageCentrePosition)
    
        $('#next').on('click',function(){

        $('.innerContainer').animate({left: - imagePositioning},500,function(){});
    })
    
    
    
    
    
    
})