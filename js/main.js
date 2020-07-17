
$(document).ready(function(){
    //슬릭
    $(".mainSlider").slick({
            dots: true,//처음과끝 보임.
            infinite: true,
            autoplay: true,//자동 슬라이드
            autoplaySpeed:3000,//자동 슬라이드 속도
            slidesToShow: 3,//3개보임
            slidesToScroll: 3,//3개씩돌아감
            prevArrow:'<i class="fas fa-arrow-left slideBtn slideL"></i>',//폰트어썸 http복붙.
            nextArrow:'<i class="fas fa-arrow-right slideBtn slideR"></i>',
      });
    
    //풀페이지
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#320D07', '#1A1A1A', '#ccddff'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        menu: '#menu',
        anchors:['firstPage', 'secondPage','thirdPage','fourthPage'],
        
	});
})