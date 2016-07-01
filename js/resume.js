$(function(){
    $("#fullpage").fullpage({
        sectionsColor: ['#5ec2e7','#9ed769','#fbfbfb','#ffe400','#5ec2e7'],
        navigation: true,
        css3: true,
        scrollingSpeed: 1000,
        easing: 'easeInQuart',
        afterLoad:function(link,index){
            switch (index){
                case 1:
                move('.section1 .desc h1').set('opacity','1').scale(1.2).duration('0.5s').end();
                move('.section1 .desc .email').set('opacity','1').duration('0.5s').end();
                move('.section1 .desc .bottom').set('width','300px').set('opacity','1').end();
                move('.section1 .desc .top').set('width','300px').set('opacity','1').end();
                move('.section1 .think').rotate(10).set('opacity','1').end();
                move('.section1 .post').translate(-200,90).set('opacity','1').end();
                move('.section1 .polaroid').set('opacity','1').end();
                move('.section1 .notebook').y(-190).end();
                move('.section1 .earphones').rotate(30).end();
                break;

                case 2:
                $.fn.fullpage.setAllowScrolling(false);
                move('.section2 h2 i').set('width','150px').duration('0.5s').end();
                move('.section2 .inner .xuhe-pc').y(-400).end(function(){
                    move('.section2 .inner .xuhe-mobile').y(-400).end(function(){
                        move('.section2 .inner .zhonglian').y(-400).end(function(){
                            $.fn.fullpage.setAllowScrolling(true);
                        });
                    });
                });
                break;

                case 3:
                move('.section3 h2 i').set('width','150px').duration('0.5s').end();
                move('.section3 .section3-ps').rotate(360).end();
                move('.section3 .section3-html').rotate(360).delay('0.1s').end();
                move('.section3 .section3-css').rotate(360).delay('0.2s').end();
                move('.section3 .section3-js').rotate(360).delay('0.3s').end();
                move('.section3 .section3-jq').rotate(360).delay('0.4s').end();
                break;

                case 4:
                move('.section4 h2 i').set('width','150px').duration('0.5s').end();
                move('.section4 .work-exp .item1').set('margin-left',0).end();
                move('.section4 .work-exp .item2').set('margin-left',0).delay('0.1s').end();
                move('.section4 .work-exp .item3').set('margin-left',0).delay('0.2s').end();
                break;

                case 5:
                move('.section5 .email').ease('cubic-bezier(0.5,0,0.5,1)').set('margin-left',0).set('opacity',1).end();
                move('.section5 .phone').ease('cubic-bezier(0.5,0,0.5,1)').set('margin-right',0).set('opacity',1).end();
                move('.section5 .contact .pdf').ease('ease-in-out').set('margin-top',0).set('opacity',1).duration('1s').end();
                move('.section5 .contact .md').ease('ease-in-out').set('margin-top',0).set('opacity',1).duration('1s').delay('0.5s').end();
                break;

                default:
                break;
            }
        },
        onLeave:function(index){
            switch (index){
                case 1:
                move('.section1 .desc h1').set('opacity','0').scale(1).end();
                move('.section1 .desc .email').set('opacity','0').end();
                move('.section1 .desc .bottom').set('width',0).set('opacity','0').end();
                move('.section1 .desc .top').set('width',0).set('opacity','0').end();
                move('.section1 .think').rotate(0).set('opacity','0').end();
                move('.section1 .post').translate(0,0).set('opacity','0').end();
                move('.section1 .polaroid').set('opacity','0').end();
                move('.section1 .notebook').y(0).end();
                move('.section1 .earphones').rotate(0).end();
                break;

                case 2:
                $.fn.fullpage.setAllowScrolling(true);
                move('.section2 h2 i').set('width',0).end();
                move('.section2 .inner .xuhe-pc').y(0).end();
                move('.section2 .inner .xuhe-mobile').y(0).end();
                move('.section2 .inner .zhonglian').y(0).end();
                break;

                case 3:
                move('.section3 h2 i').set('width',0).end();
                move('.section3 .section3-ps').rotate(0).end();
                move('.section3 .section3-html').rotate(0).end();
                move('.section3 .section3-css').rotate(0).end();
                move('.section3 .section3-jq').rotate(0).end();
                move('.section3 .section3-js').rotate(0).end();
                break;

                case 4:
                move('.section4 h2 i').set('width',0).end();
                move('.section4 .work-exp .item1').set('margin-left','100%').end();
                move('.section4 .work-exp .item2').set('margin-left','100%').end();
                move('.section4 .work-exp .item3').set('margin-left','100%').end();
                break;

                case 5:
                move('.section5 .email').set('margin-left','-150%').set('opacity',0).end();
                move('.section5 .phone').set('margin-right','-150%').set('opacity',0).end();
                move('.section5 .contact .pdf').set('margin-top','-150%').set('opacity',0).end();
                move('.section5 .contact .md').set('margin-top','-150%').set('opacity',0).end();
                break;

                default:
                break;
            }
        }
    });
});