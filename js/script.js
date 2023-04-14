//헤더 이미지 사이즈

let bgImg1 = $('.bd-placeholder-img01');
let bgImg2 = $('.bd-placeholder-img02');
let bgImg3 = $('.bd-placeholder-img03');

function bgImgSize(){
    let windowWidth = $(window).width();
    if(windowWidth < 440) {
        bgImg1.attr({src:"./img/visual-min01.jpg"})
        bgImg2.attr({src:"./img/visual-min02.jpg"})
        bgImg3.attr({src:"./img/visual-min03.jpg"})
    } else {
        bgImg1.attr({src:"./img/visual01.jpg"})
        bgImg2.attr({src:"./img/visual02.jpg"})
        bgImg3.attr({src:"./img/visual03.jpg"})
    }
}
setInterval(bgImgSize, 100);

//아이콘 색 변경
let brandIcon = document.querySelectorAll('.brand-icon');

brandIcon.forEach(function(item){
    item.addEventListener('click',function(){
      brandIcon.forEach(function(e){
            e.classList.remove('active');
      });
      item.classList.add('active');
    });
  
  });

//이미지 변경
let brandImg = $('.brand-img img');
const brandIcon1 = $('.brand-icon1');
const brandIcon2 = $('.brand-icon2');
const brandIcon3 = $('.brand-icon3');
const brandIcon4 = $('.brand-icon4');

brandIcon1.click(
    function(){
        brandImg.attr({src:"./img/milk-img.jpg"})
        more()
    }
)
brandIcon2.click(
    function(){
        brandImg.attr({src:"./img/milkpowder-img.jpg"})
        more()
    }
)

brandIcon3.click(
    function(){
        brandImg.attr({src:"./img/yogurt-img.jpg"})
        more()
    }
)
brandIcon4.click(
    function(){
        brandImg.attr({src:"./img/coffee-img.jpg"})
        more()
    }
)

//btn 애니메이션

function more(){
    let target1 = document.querySelector('.brandBtn1');
    let target2 = document.querySelector('.brandBtn2');
target1.animate([
    {transform: 'translateY(-240%)'},
    {transform: 'translateY(0)'}
],{
    duration : 500,
    easing:'ease-in-out'
});
target2.animate([
    {transform: 'translateY(240%)'},
    {transform: 'translateY(0)'}
],{
    duration : 500,
    easing:'ease-in-out'
});
}


//card animation

$(window).scroll(
    function(){
        const cardLi = $('.card');
        const cardLiTop = $('.card').offset().top-200;
        const section2Top = $('.section2').offset().top;
        const wt = $(window).scrollTop();
        if(wt>cardLiTop){
            cardLi.addClass('active')
        }else{ cardLi.removeClass('active')}
        if(wt>section2Top){
            $('.scrollTop').addClass('active')
        }else{
            $('.scrollTop').removeClass('active')
        }
    }
)

//scrollTop Btn

$('.scrollTop').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:'0'}, 100);
  });
 