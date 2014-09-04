<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Green Grade | Upskil</title>
        <!-- <link rel="stylesheet" href="css/reset.css" type="text/css" media="screen" /> -->
        <!-- <link rel="stylesheet" href="css/responsive.css" type="text/css" media="screen" /> -->
        <script src="js/jquery-1.9.1.min.js"></script>
        <!--script src="js/vendor/jquery.slides.min.js"></script-->
        <!--script src="js/script.js"></script-->
        <!--script src="js/read_pop.js"></script-->

        <script>


            (function(){(function(a,b,c){var d,e,f;return f="slidesjs",e={width:940,height:528,start:1,navigation:{active:!0,effect:"slide"},pagination:{active:!0,effect:"slide"},play:{active:!1,effect:"slide",interval:5e3,auto:!1,swap:!0,pauseOnHover:!1,restartDelay:2500},effect:{slide:{speed:500},fade:{speed:300,crossfade:!0}},callback:{loaded:function(){},start:function(){},complete:function(){}}},d=function(){function b(b,c){this.element=b,this.options=a.extend(!0,{},e,c),this._defaults=e,this._name=f,this.init()}return b}(),d.prototype.init=function(){var c,d,e,f,g,h,i=this;return c=a(this.element),this.data=a.data(this),a.data(this,"animating",!1),a.data(this,"total",c.children().not(".slidesjs-navigation",c).length),a.data(this,"current",this.options.start-1),a.data(this,"vendorPrefix",this._getVendorPrefix()),"undefined"!=typeof TouchEvent&&(a.data(this,"touch",!0),this.options.effect.slide.speed=this.options.effect.slide.speed/2),c.css({overflow:"hidden"}),c.slidesContainer=c.children().not(".slidesjs-navigation",c).wrapAll("<div class='slidesjs-container'>",c).parent().css({overflow:"hidden",position:"relative"}),a(".slidesjs-container",c).wrapInner("<div class='slidesjs-control'>",c).children(),a(".slidesjs-control",c).css({position:"relative",left:0}),a(".slidesjs-control",c).children().addClass("slidesjs-slide").css({position:"absolute",top:0,left:0,width:"100%",zIndex:0,display:"none",webkitBackfaceVisibility:"hidden"}),a.each(a(".slidesjs-control",c).children(),function(b){var c;return c=a(this),c.attr("slidesjs-index",b)}),this.data.touch&&(a(".slidesjs-control",c).on("touchstart",function(a){return i._touchstart(a)}),a(".slidesjs-control",c).on("touchmove",function(a){return i._touchmove(a)}),a(".slidesjs-control",c).on("touchend",function(a){return i._touchend(a)})),c.fadeIn(0),this.update(),this.data.touch&&this._setuptouch(),a(".slidesjs-control",c).children(":eq("+this.data.current+")").eq(0).fadeIn(0,function(){return a(this).css({zIndex:10})}),this.options.navigation.active&&(g=a("<a>",{"class":"slidesjs-previous slidesjs-navigation",href:"#",title:"Previous",text:"Previous"}).appendTo(c),d=a("<a>",{"class":"slidesjs-next slidesjs-navigation",href:"#",title:"Next",text:"Next"}).appendTo(c)),a(".slidesjs-next",c).click(function(a){return a.preventDefault(),i.stop(!0),i.next(i.options.navigation.effect)}),a(".slidesjs-previous",c).click(function(a){return a.preventDefault(),i.stop(!0),i.previous(i.options.navigation.effect)}),this.options.play.active&&(f=a("<a>",{"class":"slidesjs-play slidesjs-navigation",href:"#",title:"Play",text:"Play"}).appendTo(c),h=a("<a>",{"class":"slidesjs-stop slidesjs-navigation",href:"#",title:"Stop",text:"Stop"}).appendTo(c),f.click(function(a){return a.preventDefault(),i.play(!0)}),h.click(function(a){return a.preventDefault(),i.stop(!0)}),this.options.play.swap&&h.css({display:"none"})),this.options.pagination.active&&(e=a("<ul>",{"class":"slidesjs-pagination"}).appendTo(c),a.each(Array(this.data.total),function(b){var c,d;return c=a("<li>",{"class":"slidesjs-pagination-item"}).appendTo(e),d=a("<a>",{href:"#","data-slidesjs-item":b,html:b+1}).appendTo(c),d.click(function(b){return b.preventDefault(),i.stop(!0),i.goto(1*a(b.currentTarget).attr("data-slidesjs-item")+1)})})),a(b).bind("resize",function(){return i.update()}),this._setActive(),this.options.play.auto&&this.play(),this.options.callback.loaded(this.options.start)},d.prototype._setActive=function(b){var c,d;return c=a(this.element),this.data=a.data(this),d=b>-1?b:this.data.current,a(".active",c).removeClass("active"),a("li:eq("+d+") a",c).addClass("active")},d.prototype.update=function(){var b,c,d;return b=a(this.element),this.data=a.data(this),a(".slidesjs-control",b).children(":not(:eq("+this.data.current+"))").css({display:"none",left:0,zIndex:0}),d=b.width(),c=this.options.height/this.options.width*d,this.options.width=d,this.options.height=c,a(".slidesjs-control, .slidesjs-container",b).css({width:d,height:c})},d.prototype.next=function(b){var c;return c=a(this.element),this.data=a.data(this),a.data(this,"direction","next"),void 0===b&&(b=this.options.navigation.effect),"fade"===b?this._fade():this._slide()},d.prototype.previous=function(b){var c;return c=a(this.element),this.data=a.data(this),a.data(this,"direction","previous"),void 0===b&&(b=this.options.navigation.effect),"fade"===b?this._fade():this._slide()},d.prototype.goto=function(b){var c,d;if(c=a(this.element),this.data=a.data(this),void 0===d&&(d=this.options.pagination.effect),b>this.data.total?b=this.data.total:1>b&&(b=1),"number"==typeof b)return"fade"===d?this._fade(b):this._slide(b);if("string"==typeof b){if("first"===b)return"fade"===d?this._fade(0):this._slide(0);if("last"===b)return"fade"===d?this._fade(this.data.total):this._slide(this.data.total)}},d.prototype._setuptouch=function(){var b,c,d,e;return b=a(this.element),this.data=a.data(this),e=a(".slidesjs-control",b),c=this.data.current+1,d=this.data.current-1,0>d&&(d=this.data.total-1),c>this.data.total-1&&(c=0),e.children(":eq("+c+")").css({display:"block",left:this.options.width}),e.children(":eq("+d+")").css({display:"block",left:-this.options.width})},d.prototype._touchstart=function(b){var c,d;return c=a(this.element),this.data=a.data(this),d=b.originalEvent.touches[0],this._setuptouch(),a.data(this,"touchtimer",Number(new Date)),a.data(this,"touchstartx",d.pageX),a.data(this,"touchstarty",d.pageY),b.stopPropagation()},d.prototype._touchend=function(b){var c,d,e,f,g,h,i,j=this;return c=a(this.element),this.data=a.data(this),h=b.originalEvent.touches[0],f=a(".slidesjs-control",c),f.position().left>.5*this.options.width||f.position().left>.1*this.options.width&&250>Number(new Date)-this.data.touchtimer?(a.data(this,"direction","previous"),this._slide()):f.position().left<-(.5*this.options.width)||f.position().left<-(.1*this.options.width)&&250>Number(new Date)-this.data.touchtimer?(a.data(this,"direction","next"),this._slide()):(e=this.data.vendorPrefix,i=e+"Transform",d=e+"TransitionDuration",g=e+"TransitionTimingFunction",f[0].style[i]="translateX(0px)",f[0].style[d]=.85*this.options.effect.slide.speed+"ms"),f.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){return e=j.data.vendorPrefix,i=e+"Transform",d=e+"TransitionDuration",g=e+"TransitionTimingFunction",f[0].style[i]="",f[0].style[d]="",f[0].style[g]=""}),b.stopPropagation()},d.prototype._touchmove=function(b){var c,d,e,f,g;return c=a(this.element),this.data=a.data(this),f=b.originalEvent.touches[0],d=this.data.vendorPrefix,e=a(".slidesjs-control",c),g=d+"Transform",a.data(this,"scrolling",Math.abs(f.pageX-this.data.touchstartx)<Math.abs(f.pageY-this.data.touchstarty)),this.data.animating||this.data.scrolling||(b.preventDefault(),this._setuptouch(),e[0].style[g]="translateX("+(f.pageX-this.data.touchstartx)+"px)"),b.stopPropagation()},d.prototype.play=function(b){var c,d,e,f=this;return c=a(this.element),this.data=a.data(this),!this.data.playInterval&&(b&&(d=this.data.current,this.data.direction="next","fade"===this.options.play.effect?this._fade():this._slide()),a.data(this,"playInterval",setInterval(function(){return d=f.data.current,f.data.direction="next","fade"===f.options.play.effect?f._fade():f._slide()},this.options.play.interval)),e=a(".slidesjs-container",c),this.options.play.pauseOnHover&&(e.unbind(),e.bind("mouseenter",function(){return f.stop()}),e.bind("mouseleave",function(){return f.options.play.restartDelay?a.data(f,"restartDelay",setTimeout(function(){return f.play(!0)},f.options.play.restartDelay)):f.play()})),a.data(this,"playing",!0),a(".slidesjs-play",c).addClass("slidesjs-playing"),this.options.play.swap)?(a(".slidesjs-play",c).hide(),a(".slidesjs-stop",c).show()):void 0},d.prototype.stop=function(b){var c;return c=a(this.element),this.data=a.data(this),clearInterval(this.data.playInterval),this.options.play.pauseOnHover&&b&&a(".slidesjs-container",c).unbind(),a.data(this,"playInterval",null),a.data(this,"playing",!1),a(".slidesjs-play",c).removeClass("slidesjs-playing"),this.options.play.swap?(a(".slidesjs-stop",c).hide(),a(".slidesjs-play",c).show()):void 0},d.prototype._slide=function(b){var c,d,e,f,g,h,i,j,k,l,m=this;return c=a(this.element),this.data=a.data(this),this.data.animating||b===this.data.current+1?void 0:(a.data(this,"animating",!0),d=this.data.current,b>-1?(b-=1,l=b>d?1:-1,e=b>d?-this.options.width:this.options.width,g=b):(l="next"===this.data.direction?1:-1,e="next"===this.data.direction?-this.options.width:this.options.width,g=d+l),-1===g&&(g=this.data.total-1),g===this.data.total&&(g=0),this._setActive(g),i=a(".slidesjs-control",c),b>-1&&i.children(":not(:eq("+d+"))").css({display:"none",left:0,zIndex:0}),i.children(":eq("+g+")").css({display:"block",left:l*this.options.width,zIndex:10}),this.options.callback.start(d+1),this.data.vendorPrefix?(h=this.data.vendorPrefix,k=h+"Transform",f=h+"TransitionDuration",j=h+"TransitionTimingFunction",i[0].style[k]="translateX("+e+"px)",i[0].style[f]=this.options.effect.slide.speed+"ms",i.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){return i[0].style[k]="",i[0].style[f]="",i.children(":eq("+g+")").css({left:0}),i.children(":eq("+d+")").css({display:"none",left:0,zIndex:0}),a.data(m,"current",g),a.data(m,"animating",!1),i.unbind("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd"),i.children(":not(:eq("+g+"))").css({display:"none",left:0,zIndex:0}),m.data.touch&&m._setuptouch(),m.options.callback.complete(g+1)})):i.stop().animate({left:e},this.options.effect.slide.speed,function(){return i.css({left:0}),i.children(":eq("+g+")").css({left:0}),i.children(":eq("+d+")").css({display:"none",left:0,zIndex:0},a.data(m,"current",g),a.data(m,"animating",!1),m.options.callback.complete(g+1))}))},d.prototype._fade=function(b){var c,d,e,f,g,h=this;return c=a(this.element),this.data=a.data(this),this.data.animating||b===this.data.current+1?void 0:(a.data(this,"animating",!0),d=this.data.current,b?(b-=1,g=b>d?1:-1,e=b):(g="next"===this.data.direction?1:-1,e=d+g),-1===e&&(e=this.data.total-1),e===this.data.total&&(e=0),this._setActive(e),f=a(".slidesjs-control",c),f.children(":eq("+e+")").css({display:"none",left:0,zIndex:10}),this.options.callback.start(d+1),this.options.effect.fade.crossfade?(f.children(":eq("+this.data.current+")").stop().fadeOut(this.options.effect.fade.speed),f.children(":eq("+e+")").stop().fadeIn(this.options.effect.fade.speed,function(){return f.children(":eq("+e+")").css({zIndex:0}),a.data(h,"animating",!1),a.data(h,"current",e),h.options.callback.complete(e+1)})):f.children(":eq("+d+")").stop().fadeOut(this.options.effect.fade.speed,function(){return f.children(":eq("+e+")").stop().fadeIn(h.options.effect.fade.speed,function(){return f.children(":eq("+e+")").css({zIndex:10})}),a.data(h,"animating",!1),a.data(h,"current",e),h.options.callback.complete(e+1)}))},d.prototype._getVendorPrefix=function(){var a,b,d,e,f;for(a=c.body||c.documentElement,d=a.style,e="transition",f=["Moz","Webkit","Khtml","O","ms"],e=e.charAt(0).toUpperCase()+e.substr(1),b=0;f.length>b;){if("string"==typeof d[f[b]+e])return f[b];b++}return!1},a.fn[f]=function(b){return this.each(function(){return a.data(this,"plugin_"+f)?void 0:a.data(this,"plugin_"+f,new d(this,b))})}})(jQuery,window,document)}).call(this);


            jQuery(function() {
              jQuery('#slides').slidesjs({ 
                // height: 340,
                navigation: false,
                pagination: false,
                effect: {
                  fade: {
                    speed: 400
                  }
                },
                callback: {
                    start: function(number)
                    {     
                        jQuery("#slider_content1,#slider_content2,#slider_content3,#slider_content4").fadeOut(500);
                    },
                    complete: function(number)
                    {     
                        jQuery("#slider_content" + number).delay(500).fadeIn(1000);
                    }   
                },

                play: {
                    active: false,
                    auto: true,
                    interval: 6000,
                    pauseOnHover: false,
                    effect: "fade"
                }
              });
            });

             jQuery(window).load(function() {
               
                if (jQuery(window).width() <= 2560){  

                    var el = jQuery("#slider_wrap");
                    var img = jQuery(".slider_img");
                    resizeImage();

                             
                    function resizeImage(){
                      img.css('height', el.height() * (1)+'px') ;
                      //alert(el.height() * (1)+'px');
                    }
                    
                    
                    jQuery(window).resize(function() {
                      resizeImage();
                    });
                    
                    
                }
                
                 
            });

            jQuery(window).bind('resize', function() {
                if (jQuery(window).width() > 900){  
                    
                    jQuery(".read_more ").css({'margin-top': (82)+'px'});
                    //jQuery("#about_read_more ").css({'margin-top': (57)+'px'});
                }

                jQuery(".container_popup").css("height", jQuery(window).height());


            });

            
            /* popup */

            jQuery(document).ready(function(){

                jQuery('.show_popup').click(function(event){

                    var ids=jQuery(this).attr("id");
                    jQuery("#"+ids+"-info").show();

                    jQuery("#upskillRead-info").hide();
                    jQuery("#course-info").hide();
                    jQuery("#about-info").hide();
                    jQuery("#profile4-info").hide();
                    jQuery("#profile5-info").hide();

                    if(ids== 'upskillRead'){
                        
                        //alert(ids);

                        jQuery("#upskillRead-info").fadeToggle(1000);
                        jQuery(".background_overlay").fadeToggle(500);

                        event.preventDefault();
                    
                    }
                    else if(ids== 'course'){
                        
                        //alert(ids);
                        jQuery("#course-info").fadeIn(1000);
                  jQuery(".background_overlay").fadeIn(500);
                        event.preventDefault();
                    }
                    else if(ids== 'about'){
                        
                        //alert(ids);
                        jQuery("#about-info").fadeIn(1000);
                  jQuery(".background_overlay").fadeIn(500);
                        event.preventDefault();
                    }
                    else if(ids== 'partner'){
                        
                        //alert(ids);
                        jQuery("#partner-info").fadeIn(1000);
                  jQuery(".background_overlay").fadeIn(500);
                        event.preventDefault();
                    }
                });
                jQuery(".cancel, .background_overlay").click(function(){
                  jQuery("#upskillRead-info").hide();
                  jQuery("#course-info").hide();
                  jQuery("#about-info").hide();
                  jQuery("#partner-info").hide();
                  jQuery(".background_overlay").hide();
                });
            });

        </script>


    <style type="text/css">

    html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video {
    margin:0;
    padding:0;
    border:0;
    font-size:100%;
    font:inherit;
    vertical-align:baseline;
}
/* HTML5 display-role reset for older browsers */article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
    display:block;
}
body {
    line-height:1;
}
ol,ul {
    list-style:none;
}
blockquote,q {
    quotes:none;
}
blockquote:before,blockquote:after,q:before,q:after {
    content:'';
    content:none;
}
table {
    border-collapse:collapse;
    border-spacing: 0;
}

        body {
    /*border-top:5px solid #e56038;*/
    background:rgba(98,187,70,0.35);
    font-family:'Open Sans',sans-serif;
    color:#333333;
}
.clear {
    clear:both;
    height:1px;
}
p {
    margin:5px 0;
    line-height:25px;
}
a {
    text-decoration:none;
    color:inherit;
    transition:color .5s ease;
}
strong {
    font-weight:bold;
}
figcaption strong {
    margin:5px 0;
    display:block;
    text-align: center;
}
figcaption {
    /*line-height:25px;font-size:14px;width:200px;*/
    line-height:16px;
    font-size:12px;
    width:200px;
    margin:auto;
}
hr {
    background-color:#00a956;
    border:0;
    height:2px;
    width:100%;
    margin-top:0px;
    /*margin: 20px 0;*/
}
/* BODY_WRAPPER */
.body_wrapper {
    width:95%;
    margin:-35px auto;
    background: #fff;
}
/*BODY_MID_WRAP */
.body_mid_wrap {
    width:95%;
    margin:auto;
    /*background: rgba(151,203,150,0.3);*/
}
/* HEADER */
header {
    position:relative;
    width:auto;
    min-height:90px;
    max-width:900px;
    margin:0 auto 20px auto;
}
header h1 {
    margin:35px 0 0 0;
    font-size:55px;
    color:#e56038;
    font-family:'Baumans',cursive;
}
header p {
    font-family:'Open Sans',sans-serif;
    font-size:16px;
    color:#4A463B;
    margin-left: 132px;
}
nav {
    /*position:absolute;*/
    right:0;
    bottom:0;
    margin:45px 0 0 0;
    float:right;
}
nav ul {
    list-style:none;
}
nav ul li {
    display:block;
    float:left;
    padding: 3px 15px;
}
nav ul li a {
    font-family:'Open Sans',sans-serif;
    font-size:14px;
    color:#fff;
    text-align:center;
    /*text-transform:uppercase;*/
    padding:5px 15px;
    border-radius:8px;
    transition:all .25s ease;
    -webkit-transition:all .25s ease;
    -moz-transition:all .25s ease;
    -os-transition:all .25s ease;
    background-image:-ms-linear-gradient(top,#53D665 0%,#6BAB7C 100%);
    background-image:-moz-linear-gradient(top,#53D665 0%,#6BAB7C 100%);
    background-image:-o-linear-gradient(top,#53D665 0%,#6BAB7C 100%);
    background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#53D665),color-stop(1,#6BAB7C));
}
nav ul li a:hover {
    color:#fff;
    background-image:-ms-linear-gradient(bottom,#53D665 0%,#6BAB7C 100%);
    background-image:-moz-linear-gradient(bottom,#53D665 0%,#6BAB7C 100%);
    background-image:-o-linear-gradient(bottom,#53D665 0%,#6BAB7C 100%);
    background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0,#53D665),color-stop(1,#6BAB7C));
}
.nav_divider:after {
    content:" | ";
    position:absolute;
    /* left:28%;*/
    color:#aaa;
    margin-left:2em;
    margin-top:.3%;
}
nav ul li a.nav_divider {
    content:0;
}
#mobileMenu {
    position:fixed;
    top:0;
    left:0;
    width:100%;
    display:none;
}
#mobileMenu ul li {
    display:block;
    background-color:#E56038;
    color:#fff;
    padding:12px 0;
    letter-spacing:0.1em;
    text-align:center;
    text-transform:uppercase;
    border-bottom:1px solid #CC5836;
}
.toggleMobile {
    display: none;
}
/* BANNER_WRAP */
.banner_wrap {
    width:100%;
    height:360px;
}
.banner_wrap aside {
    float:left;
    width:16%;
    height:340px;
}
.banner_left {
    max-width:100%;
    height:inherit;
    background:#62bb46 url("http://localhost/upskill_new/css/../img/logo_banner.png");
    background-size:contain;
    background-repeat:no-repeat;
    background-position:center;
    box-shadow:3px 3px 5px 0px #3C7627;
    -webkit-box-shadow:3px 3px 5px 0px #3C7627;
    -moz-box-shadow:3px 3px 5px 0px #3C7627;
    -o-box-shadow:3px 3px 5px 0px #3C7627;
}
#shade_logo {
    display:block;
    margin-left:auto;
    margin-right:auto;
    width:80%;
    margin-top:166px;
    opacity:.3;
}
#aside_logo {
    display:block;
    margin-left:auto;
    margin-right:auto;
    padding-top:10px;
    max-width:90%;
    height:auto;
}
.banner_wrap #slider_wrap {
    float:right;
    width:82%;
    height:340px;
    background:#aaa;
}
#slider_wrap img {
    max-width:100%;
    height: auto;
}
#green_border {
    width:16%;
    font-size:20px;
    border-bottom:3px solid #00a855;
    /*padding:20px 0;*/
    margin-bottom:20px;
}
/* 3 COLUMNS */
#boxcontent {
    width:auto;
    /*max-width:900px;*/
    max-width:100%;
    margin:0 auto;
    /*padding:70px 0 45px 0;*/
    padding:0px 0 45px 0;
}
#boxcontent article {
    float:left;
    width:240px;
    /*width:220px;*/
    height:227px;
    margin-right:45px;
    margin-top:15px;
    padding-bottom:15px;
    border-bottom:2px solid #7bc35b;
    font-size:14px;
}
#boxcontent article h1 {
    font-family:'Open Sans',sans-serif;
    font-size:20px;
    color:#3a3a3b;
    margin-bottom:10px;
    margin-left:48px;
}
#boxcontent article #upskill {
    margin-left:10px;
}
.icon_bar {
    float:left;
    width:37px;
    height:36px;
    background:#62bb46;
    border-radius:50%;
}
.icon {
    width:22px;
    margin:8px;
}
#icon_camera {
    margin-top:11px;
}
#icon_msg {
    margin-top:12px;
}
#boxcontent article img {
    float:left;
}
#boxcontent article p {
    line-height:25px;
    font-family:'Open Sans',sans-serif;
    color:#000;
    font-size:14px;
    text-align:left;
    margin-left:48px;
}
.read_more {
    float:right;
    width:95px;
    height:25px;
    margin-top:32px;
    background:#00a651;
    border-top-right-radius:6px;
    border-bottom-left-radius:6px;
    text-align:center;
    color:#fff;
    font-size:12px;
    line-height:25px;
}
#about_read_more {
    margin-top:7px;
}
#slider_content1,#slider_content2,#slider_content3,#slider_content4 {
    line-height:25px;
    font-family:'Open Sans',sans-serif;
    width:350px;
    position:absolute;
    top:15%;
    left:15%;
    display:none;
    z-index:11;
}
#slider_content1 h3,#slider_content2 h3,#slider_content3 h3,#slider_content4 h3 {
    color:#EBE8DE;
    font-size:25px;
    font-weight:bold;
    margin-bottom:10px;
    background-color:#333333;
    padding:10px 15px;
    border-radius:15px 0 15px 0;
    display:inline-block;
}
#slider_content1 {
    display: block;
}
#slider_content1 p,#slider_content2 p,#slider_content3 p,#slider_content4 p {
    margin:0 0 30px 0;
    /*color:#4a463b;background-color:#EBE8DE;*/
    color:#fff;
    font-size:12px;
    /*background:rgba(235,232,222,0.33);*/
    background:#000;
    opacity:.7;
    padding:10px 15px;
    border-radius:5px;
}
/* SECTION BOTTOM */
.section_bottom {
    width:auto;
    max-width:100%;
    min-height:160px;
    background:#fff;
    /*border-bottom: 2px solid #00a956;*/
}
.section_bottom_article {
    /*background:pink;*/
    width:270px !important;
    height:160px;
    /*border-bottom:2px solid #00a956;*/
    padding-right:10px;
}
.top_half {
    width:100%;
    height:80px;
    padding-left:10px;
    /*background:#dfdfdf;*/
    border-bottom:2px solid #00a956;
}
/*88 */
#section_bottom_up {
    width:90%;
    height:83px;
    background:#dfdfdf;
    border-bottom:2px solid #00a956;
}
.round_img {
    display:block;
    margin-left:auto;
    margin-right:auto;
}
#section_bottom_down {
    width:100%;
    height:83px;
    background:#f7f7f7;
    border-bottom: 2px solid #00a956;
}
.round_image_top {
    width:142px;
    height:72px;
    border-radius:90px 90px 0 0;
    /*border-top:2px solid #00a956;*/
    display:block;
    margin-left:auto;
    margin-right:auto;
}
.round_image_bottom {
    width:142px;
    height:72px;
    border-radius:0 0 90px 90px;
    border-bottom:2px solid #00a956;
    display:block;
    margin-left:auto;
    margin-right:auto;
}
.red_read_more {
    float:right;
    font-size:10px;
    color: red;
}
/* BUTTONS */
.button {
    padding:7px 14px;
    border:1px solid #c3532e;
    background-image:linear-gradient(bottom,#E56038 0%,#ff8c66 100%);
    background-image:linear-gradient(to bottom,#ff8c66 0%,#E56038 100%);
    background-color:#eb653c;
    color:#EBE8DE;
    text-shadow:1px 1px 0px #ff8155;
    text-decoration:none;
    border-radius:5px;
    box-shadow:1px 1px 2px 1px rgba(0,0,0,0.3);
}
.button:hover {
    background:none #EBE8DE;
    border-color:#EBE8DE;
    text-shadow:none;
    color: #4A463B;
}
/* FOUR COLUMNS */
#four_columns,#text_columns {
    line-height:25px;
    font-family:'Open Sans',sans-serif;
    clear:both;
    width:auto;
    max-width:100%;
    margin: 0 auto;
}
#four_columns h2,#text_columns h3 {
    width:16%;
    font-size:20px;
    border-bottom:3px solid #00a855;
    /*padding:20px 0;*/
    margin-bottom:20px;
}
#four_columns .img-item {
    float:left;
    width:200px;
    /*width:22.8%;*/
    /*margin-right:25px;*/
}
#four_columns .img-item a {
    position:relative;
    display:block;
}

/* POP UP */


.background_overlay 
{
    position: fixed;
    left: 0px;
    top: 0px;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 999999;
    background-color: rgba(0, 0, 0, 0.3);
}
.read_details
{
    display: none;
    width: 60%;
    height: 500px;
    overflow: scroll;
    background: #fff;
    position: absolute;
    z-index: 99999999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 30% auto;
    border: 3px solid #75D9A8;
    padding: 5px;
}
.read_details h1
{
    color: #2D733C;
    margin: 5px;
}
.read_para
{
    margin: 15px;
    font-size: 12px;
}
.read_more_image
{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
}
#green_link
{
    color: #00a956;
}
#close
{
    position: absolute;
    top: -18px;
    right: -18px;
    width: 36px;
    height: 36px;
    cursor: pointer;
    z-index: 8040;
}
.cancel 
{ 
    display:block; 
    position:absolute; 
    top:3px; 
    right:2px; 
    background: #93D394;
    color:black; 
    height:30px; 
    width:35px; 
    font-size:30px; 
    text-decoration:none; 
    text-align:center; 
    font-weight:bold; 
}
.cancel:hover 
{
    background:rgb(245,245,245);
}



/* FOOTER SECTION */
footer.site_footer {
    padding-left:3%;
    padding-right:3%;
    padding-bottom:2%;
    padding-top:2%;
    background:rgba(29,22,22,0.06);
    margin-top:40px;
    font-size:14px;
}
.footer_left {
    float:left !important;
    width:27%;
    margin-left:-2%;
    margin-top:1em;
    font-size:13px;
}
.footer_left ul {
    margin:0;
    padding:0;
}
.footer_left li {
    float:left;
    list-style:none;
    margin-right:15px;
}
.footer_left li a {
    color:#ababab;
}
.footer_left li a:hover {
    text-decoration:none;
    color:#62bb46;
}
#web_link {
    color:#169420;
    text-decoration:none;
}
.footer_right {
    float:right;
    margin-right:-2%;
    margin-top:1em;
    font-size:13px;
    color:#666666;
}
.footer_top {
    height:20px;
    margin:auto;
    padding-bottom:20px;
    text-align:center;
}
.footer_bottom {
    display:block;
}
.footer_top span {
    margin:0;
    padding:0;
    color:#666;
    font-size:15px;
}
#footer_contact {
    color:#62bb46;
    font-weight: 700;
}
/* SKIPLINK */
.go-top {
    position:fixed;
    bottom:2em;
    right:2em;
    text-decoration:none;
    color:white;
    background-color:rgba(0,0,0,0.3);
    font-size:12px;
    padding:1em;
    display:none;
}
.go-top:hover {
    background-color: rgba(0,0,0,0.6);
}
/* SLIDESHOW */
/* Prevent the slideshow from flashing on load */
.slidesjs-container {
    border-top:1px #d6d0c1 solid;
}
#slides {
    display: none;
}
/* Center the slideshow */
.container {
    width:auto;
    margin:0 auto;
    position: relative;
}
/* Show active item in the pagination */
.slidesjs-pagination .active {
    color:red;
}
#slider_content1 p .responsive_button,#slider_content2 p .responsive_button,#slider_content3 p .responsive_button,#slider_content4 p .responsive_button {
    display:none;
    color: #000;
}
/* MISC */
.clear {
    clear: both;
}
.hidden {
    position:absolute;
    clip:rect(1px 1px 1px 1px);
    /* IE6 & 7 */
    clip:rect(1px,1px,1px,1px);
}
/* MEDIA QUERIES FOR A RESPONSIVE LAYOUT */
@media (max-width:2560px) {
    #boxcontent {
        width:1200px !important;
        margin:0 auto;
    }
    .section_bottom {
        width:1200px !important;
        margin:0 auto;
    }
}
@media (max-width:1215px) {
    #slider_content1,#slider_content2,#slider_content3,#slider_content4 {
        width:auto;
        margin-right:50px;
    }
    #slider_content1 h2,#slider_content2 h2,#slider_content3 h2,#slider_content4 h2 {
        font-size:18px;
    }
    #slider_content1 p,#slider_content2 p,#slider_content3 p,#slider_content4 p {
        font-size:14px;
    }
    #slider_content1 p .responsive_button,#slider_content2 p .responsive_button,#slider_content3 p .responsive_button,#slider_content4 p .responsive_button {
        display:inline;
    }
    .container .button {
        display: none;
    }
}
@media (max-width:1300px) {
    #boxcontent {
        width:600px !important;
        margin:0 auto;
        /*padding:70px 0 45px 0;*/
        padding:0px 0 45px 0;
    }
    .section_bottom {
        /*width:1200px !important;*/
        width:600px !important;
        margin:0 auto;
    }
}
@media (max-width:1200px) {
    #four_columns {
        /*width:500px;*/
        width:900px;
    }
}
@media (max-width:900px) {
    .read_more {
        margin-top:57px;
    }
    #about_read_more {
        margin-top:32px;
    }
    #course_read_more {
        margin-top:82px;
    }
}
@media (max-width:915px) {
    #boxcontent article {
        float:none;
        margin:30px auto 0 auto;
        width:60%;
    }
    #spacer {
        font-size:15px;
    }
    #spacer .search {
        margin-top:19px;
        margin-right:-385px;
    }
    #spacer p {
        margin-left:-370px;
    }
    input {
        padding:4px;
        font-size:14px;
    }
    input[type="submit"] {
        padding: 1px 14px;
    }
    #four_columns {
        /*width:500px;*/
        width:450px;
    }
    #four_columns .img-item:nth-of-type(3),#four_columns .img-item:nth-of-type(4) {
        margin-top:25px;
    }
    #text_columns article.column1,#text_columns .column2 {
        float:none;
        max-width:500px;
        margin:50px 30px 0 30px;
    }
    .column2 .row {
        float:none;
        margin:0 0 40px 50px;
    }
    footer .wrapper .column {
        font-size:12px;
        width:230px;
    }
}
@media (max-width:765px) {
    .container {
        height:1px;
        top:-1500px;
    }
    header {
        height:120px;
    }
    header nav {
        right:auto;
        bottom:auto;
        left:50%;
        top:100px;
        margin-left:-184px;
    }
    #spacer {
        height:100px;
    }
    #spacer p {
        text-align:center;
        position:static;
        margin:0 auto;
        padding:15px 0 7px 0;
    }
    #spacer .search {
        text-align:center;
        position:static;
        margin:0 auto;
    }
    footer {
        padding-bottom:70px;
        height:auto;
    }
    footer .wrapper {
        width:350px;
        margin:0 auto;
    }
    footer .wrapper .column {
        margin-top:30px;
        float:none;
        font-size:14px;
        width:auto;
    }
    footer .wrapper .social {
        display:none;
    }
}
@media (max-width:500px) {
    header {
        margin-top:80px;
        text-align:center;
    }
    #spacer {
        height:auto;
        padding-bottom:15px;
    }
    #four_columns {
        width:auto;
    }
    #four_columns .img-item {
        width:200px;
        float:none;
        margin:25px auto 0 auto;
    }
    #four_columns h2 {
        margin:0 30px;
    }
    .column2 .row {
        margin:0 0 40px 10px;
        width:auto;
    }
    footer .wrapper {
        width:auto;
    }
    footer .wrapper .column {
        margin:0 auto 15px auto;
        max-width:300px;
    }
    input {
        width:auto;
    }
    #mobileMenu {
        display:block;
        z-index:99;
    }
    .toggleMobile {
        position:fixed;
        top:10px;
        left:10px;
        display:block;
        width:40px;
        height:36px;
        cursor:pointer;
        z-index:999;
    }
    .toggleMobile span.menu1,.toggleMobile span.menu2,.toggleMobile span.menu3 {
        display:block;
        position:absolute;
        width:40px;
        height:8px;
        left:0;
        background:#EDA28C;
        -webkit-transition:all 0.35s cubic-bezier(0.75,0.25,0.10,0.95);
        transition:all 0.35s cubic-bezier(0.75,0.25,0.10,0.95);
    }
    .toggleMobile span.menu1 {
        top:0;
    }
    .toggleMobile span.menu2 {
        top:14px;
    }
    .toggleMobile span.menu3 {
        top:28px;
    }
    .toggleMobile.active span.menu1 {
        top:14px;
        -webkit-transform:rotate(45deg);
        -moz-transform:rotate(45deg);
        -o-transform:rotate(45deg);
        -ms-transform:rotate(45deg);
        transform:rotate(45deg);
        -webkit-transition:all 0.35s cubic-bezier(0.75,0.25,0.10,0.95);
        transition:all 0.5s cubic-bezier(0.75,0.25,0.10,0.95);
    }
    .toggleMobile.active span.menu2 {
        -webkit-transform:rotate(-45deg);
        -moz-transform:rotate(-45deg);
        -o-transform:rotate(-45deg);
        -ms-transform:rotate(-45deg);
        transform:rotate(-45deg);
        -webkit-transition:all 0.35s cubic-bezier(0.75,0.25,0.10,0.95);
        transition:all 0.5s cubic-bezier(0.75,0.25,0.10,0.95);
    }
    .toggleMobile.active span.menu3 {
        opacity:0;
        -webkit-transition:opacity 0.35s cubic-bezier(0.75,0.25,0.10,0.95);
        transition:opacity 0.35s cubic-bezier(0.75,0.25,0.10,0.95);
    }
    header nav {
        display:none;
    }
    header h1 {
        font-size:40px;
    }
    header p {
        margin-left:60px;
        font-size: 14px;
    }
}
/* KEYFRAMES */
@keyframes stylie-transform-keyframes {
    0% {
        transform:translateX(30px) translateY(46px) rotate(0deg) translate(-50%,-50%);
        animation-timing-function:cubic-bezier(.25,.25,.75,.75);
    }
    100% {
        transform:translateX(260px) translateY(-150px) rotate(0deg) translate(-50%,-50%);
    }
}
@keyframes stylie-transform2-keyframes {
    0% {
        transform:translateX(40px) translateY(40px) rotate(0deg) translate(-50%,-50%);
        animation-timing-function:cubic-bezier(.25,.25,.75,.75);
    }
    100% {
        transform: translateX(50px) translateY(40px) rotate(0deg) translate(-50%,-50%);
    }
}

    </style>
        
        
  </head>

  <body>
       
      <div class="body_wrapper">

          <div class="body_mid_wrap">
          
              <!-- header -->

                <header>
            <div class="toggleMobile">
                <span class="menu1"></span>
                <span class="menu2"></span>
                <span class="menu3"></span>
            </div>
            <div id="mobileMenu">
                <ul>
                    <li><a href="javascript:void(0)">Home</a></li>
                    <li><a href="javascript:void(0)">About Us</a></li>
                    <li><a href="javascript:void(0)">UpSkill</a></li>
                    <li><a href="javascript:void(0)">E-library</a></li>
                    <li><a href="javascript:void(0)">Certificates</a></li>
                    <li><a href="javascript:void(0)">Contact Us</a></li>
                </ul>
            </div>           
            <h1></h1>
            <p></p>           
            
            <nav>
                <h2 class="hidden">Our navigation</h2>
                <ul>
                    <li><a href="javascript:void(0)" class="nav_divider">Home</a></li>
                    <li><a href="javascript:void(0)" class="nav_divider">About Us</a></li>
                    <li><a href="javascript:void(0)" class="nav_divider">UpSkill</a></li>
                    <li><a href="javascript:void(0)" class="nav_divider">E-library</a></li>
                    <li><a href="javascript:void(0)" class="nav_divider">Certificates</a></li>
                    <li><a href="javascript:void(0)">Contact Us</a></li>
                </ul>
            </nav>
        </header>

              <!-- header end -->

              <div class="banner_wrap">

                  <aside>

                      <div class="banner_left">
                        <a href="index.php"><img src="img/site_logo.png" id="aside_logo"></a>
                      </div>

                  </aside>
                  <!-- <section class="container"> -->
                  <section class="container" id="slider_wrap">
                       
                      <h2 class="hidden">UpSkill</h2>
                        <article id="slider_content1">
                            <h3>UpSkill</h3>
                            <p>
                                UpSkill is an e-learning platform that raises the awareness levels of compliance and labour standards with the core aim of encouraging factory mid-managers to gain thorough knowledge. 
                                <a href="javascript:void(0)" class="responsive_button">Mehr lesen...</a>
                            </p>
                            <a class="button" href="javascript:void(0)">Mr. Sharon</a>
                        </article>
                        <article id="slider_content2">
                            <h3>Tell The Story</h3>
                            <p>
                                UpSkill was created and designed by GreenGrade Solutions Ltd. It is supported by the UK Government’s Department for International Development through its ‘Trade in Global Value Chains Initiative’ in Bangladesh. 
                                <a href="javascript:void(0)" class="responsive_button">Maher</a>
                            </p>
                            <a class="button" href="javascript:void(0)">Maher</a>
                        </article>
                        <article id="slider_content3">
                            <h3>About</h3>
                            <p>
                                UpSkill a ground breaking learning platform, Upskill by GreenGrade Solutions was awarded UK aid funding in January 2014.
                                <a href="javascript:void(0)" class="responsive_button">Mr. Shamim</a>
                            </p>
                            <a class="button" href="javascript:void(0)">Mr. Shamim</a>
                        </article>
                        <article id="slider_content4">
                            <h3>Take Action</h3>
                            <p>
                                To ensure lasting change at multiple levels of the factory, UpSkill modules address subjects such as working conditions, hygiene, safety and collective bargaining.
                                <a href="javascript:void(0)" class="responsive_button">Anneysa Ghosh</a>
                            </p>
                            <a class="button" href="javascript:void(0)">Anneysa Ghosh</a>
                        </article>
                        <div id="slides">
                            <img src="img/11.jpg" alt="Some alt text" class="slider_img">
                            <img src="img/22.jpg" alt="Some alt text" class="slider_img">      
                            <img src="img/33.jpg" alt="Some alt text" class="slider_img">
                            <img src="img/44.jpg" alt="Some alt text" class="slider_img">
                        </div>


                  </section> <!-- slider section -->

                  

              </div>  <!-- banner_wrap end -->

              <h2 id="green_border"></h2>  


            <section id="boxcontent">
                <h2 class="hidden">UpSkill</h2>
                <article>                              
                    
                    <h1 id="upskill">UpSkill</h1>
                    <p id="upskill">         
                        UpSkill is an e-learning platform that raises the awareness levels of compliance and labour standards with the core aim of encouraging factory mid-managers to gain thorough knowledge. 
                    </p>
                    <div class="read_more"><a href="javascript:void(0)" class="show_popup" id="upskillRead" data-showpopup="1"> Read more...</a></div>
                </article>
                <article>                    
                    <div class="icon_bar">
                        <img src="img/camera.png" id="icon_camera" class="icon">
                   </div>       
                    <h1>UpSkill Course</h1>
                    <p>         
                        To ensure lasting change at multiple levels of the factory, UpSkill modules address subjects such as working conditions, hygiene, safety and collective bargaining.
                    </p>
                    <div class="read_more" id="course_read_more"><a href="javascript:void(0)" class="show_popup" id="course"> Read more...</a></div>
                </article>
                <article>                   
                    <div class="icon_bar">
                        <img src="img/icon_msg.png" id="icon_msg" class="icon">
                   </div>         
                    <h1>About Us</h1>
                    <p style="padding-bottom: 50px;">         
                        UpSkill a ground breaking learning platform, Upskill by GreenGrade Solutions was awarded UK aid funding in January 2014.
                    </p>
                    <div class="read_more" id="about_read_more"><a href="javascript:void(0)" class="show_popup" id="about"> Read more...</a></div>
                </article>
                <article>                   
                    <div class="icon_bar">
                        <img src="img/star.png" id="" class="icon">
                   </div>                
                    <h1>Partners</h1>
                    <p>         
                        UpSkill is endorsed by major retailers, brands and factories and its syllabus was peer reviewed by the global audit firm Bureau Veritas for quality assurance purposes.
                    </p>
                    <div class="read_more"><a href="javascript:void(0)" class="show_popup" id="partner"> Read more...</a></div>
                </article>

                <br class="clear"/>



            </section> <!-- top_four_ columns and box-content end -->

            <section class="section_bottom">

                <div id="four_columns">

                    <article class="img-item section_bottom_article">
                        <div class="top_half">
                            <h3 class="hidden"></h3>
                            <figure>
                                <img src="img/hand.png" class="round_img" style="padding-top:8px;">
                            </figure>
                        </div>
                        <figcaption>
                            <strong>
                                Training and Examination Method :
                            </strong>
                            The users can access the courses any time which is convenient for them.  
                            <a href="" class="red_read_more">Read more</a>
                        </figcaption>
                    </article>
                     <article class="img-item section_bottom_article">
                        <div class="top_half">
                            <figcaption style="margin-top: -5px;">
                                <strong>
                                    How to use the system :
                                </strong>
                                Overview of international ethical compliance requirements for factory managers.
                            </figcaption>
                            <figure>
                                <img src="img/how_to_use.png" class="round_image_bottom" style="margin-top: 13px;"> 
                            </figure>
                        </div>
                    </article>
                     <article class="img-item section_bottom_article">
                        <div class="top_half">
                            <figure>
                                <img src="img/media.png" class="round_img round_image_top" style="padding-top:8px;">
                            </figure>
                            <figcaption>
                                <strong>
                                    In media :
                                </strong>
                                implementation of Bangladeshi law and best practice into garment factory setting.
                                <a href="" class="red_read_more">Read more</a>
                            </figcaption>
                        </div>
                    </article>
                     <article class="img-item section_bottom_article">
                        <div class="top_half">
                            <figcaption style="margin-top: -5px;">
                                <strong>
                                    Events :
                                </strong>
                                Overview of international ethical compliance requirements for factory managers.
                            </figcaption>
                        </div>
                        <figure>
                            <img src="img/event.png" class="round_img round_image_bottom">
                        </figure>
                    </article>

                </div>
                

            </section>  <!-- section_bottom end -->

            <hr>

            <div class="clear"></div>

            <!-- POP UP FOR TOP 4 OPTION -->

            <!--div class="container_popup"></div>
                <div class="popup" id="upskill_pop"></div-->

                    <!--div class="overlay"></div>
                    <div class="popup">Some popup text</div-->

                        
                        <!--div id="loginScreen"> 
                            <a href="#" class="cancel">&times;</a> 
                        </div> 
                        <div id="cover" > </div-->

                        <div class="background_overlay" style="display: none;"></div>

                        <div class="read_details" id="upskillRead-info">
                            <h1>More details for UpSkill</h1>
                            <p class="read_para">

                                UpSkill supplements the ethical compliance knowledge of managers in the garment 
                                factories.It is an e-learning platform that raises the awareness levels of 
                                compliance and labour standards.The UpSkill platform is flexible, accessible 
                                and user-friendly for all. Prior knowledge of ethical compliance is not necessary, 
                                and the system can measure the actual understanding of the participants in real-time. 
                                
                            </p>

                            <img src="img/upskill.jpg" class="read_more_image">

                            <p class="read_para">
                                UpSkill allows the student to learn in her/his own pace, through an interactive process 
                                which is challenging, fun and engaging. The users can access the courses any time which is
                                 convenient for them.  They can choose either a web based learning, through a desktop
                                  computer that is linked to the internet, or they may opt for a tablet computer 
                                  learning, with a pre-loaded UpSkill app. A country based Customer Service Centre 
                                  will provide assistance on technical and course material issues that any trainee or 
                                  prospective user will have.
                            </p>

                            <a href="" class="cancel">&times;</a> 

                            <div class="clear"></div>

                            
                        </div>  <!-- upskillRead-info end -->
                    

                    
                        <div class="background_overlay" style="display: none;"></div>
                        <div class="read_details" id="course-info">
                            <h1>More details for UpSkill Course</h1>
                            <p class="read_para">

                                There are two levels of the UpSkill course:

                                Foundation level: this will teach the learner an overview of Ethical Compliance and Social Audit principles, targeting mid-level managers across the factory and can further include cross functional representatives such as merchandisers, maintenance managers and yarn store managers. When qualified, the candidate will: 
                                -   Get a basic understanding of ethical compliance, based on international standards- the ETI Base Code and the ILO conventions, as applicable to a factory setting.
                                -   Be able to identify and improve ethical and safety issues within their authority or escalate as necessary.
                                -   Equip themselves with foundation level knowledge in ethical compliance, which allows them to apply knowledge to their own department or work area as well as further their understanding.
                                -   Be capable of acting as an informed member of the pre-audit preparation process within a factory environment.

                            </p>

                            <img src="img/course.png" class="read_more_image">

                            <p class="read_para">
                                Practitioner level: this qualification is the higher level of UpSkill, and is designed for Compliance Managers or those heading the compliance function within a factory. It requires the candidate to complete the Foundation level as a pre-requisite. When qualified, the candidates will:
-   Get an overall understanding of ethical compliance, based on local law and industry best practice for a factory setting.
-   Be able to identify and improve ethical and safety issues across the factory to reach market expectations required to supply products to international brands and retailers.
-   Understand that ethical compliance needs to be a process based on a management system and not carried out on an ad-hoc basis.
-   Equip themselves with practitioner level knowledge in ethical compliance, allowing them understand and interpret related newer material to stay updated on new developments.
-   Be capable of leading the pre-audit preparation process within a factory environment.

                            </p>

                            <a href="" class="cancel">&times;</a> 

                            <div class="clear"></div>

                            
                        </div>  <!-- course-info end -->

                        <div class="background_overlay" style="display: none;"></div>
                        <div class="read_details" id="about-info">
                            <h1>More details for About Us</h1>
                            <p class="read_para">

                                Specialising in ethical compliance solutions, GreenGrade works with international buyers and helps factories to understand and adhere to local legislation, international standards and to the ethical requirements of major brands and retailers.  
GreenGrade plays a vital role in providing structure and supporting the improvement process of factories from beginning to end. We bring them up to the ETI and SA8000 standards, and enhance their performance on a continuous basis. GreenGrade ensures a quick Corrective Action Plan (CAP) turnaround and improved audit results.

    Please visit us for more information on <a href="http://www.greengrade.co.uk/" id="green_link">www.greengrade.co.uk </a> 


                            </p>

                           

                            <a href="" class="cancel">&times;</a> 

                            <div class="clear"></div>

                            
                        </div>  <!-- about-info end -->


                        <div class="background_overlay" style="display: none;"></div>
                        <div class="read_details" id="partner-info">
                            <h1>More details for PArtners</h1>
                            <p class="read_para">

                                UpSkill was created and designed by GreenGrade Solutions Ltd. It is supported by the UK Government’s Department for International Development through its ‘Trade in Global Value Chains Initiative’ in Bangladesh. UpSkill takes ethical compliance knowledge directly to factories, to an extent not experienced before in the country. GreenGrade is collaborating with Stockholm Environment Institute at University of York for data analysis. UpSkill is endorsed by leading retailers, brands and factories.

                            </p>

                           

                            <a href="" class="cancel">&times;</a> 

                            <div class="clear"></div>

                            
                        </div>  <!-- partner-info end -->
                    

            
                <!-- footer -->

                <footer class="site_footer">
                
                <div class="footer_top">
                       
                    <span id="footer_contact"> Contact Us : </span>
                    GreenGrade Solutions Ltd - Telephone: +88 02 893 11 77 - Email: upskill.support@greengrade.co.uk   Web: <a href="http://www.greengrade.co.uk/" id="web_link"> www.greengrade.co.uk </a>
                       

                </div>
                
                <div class="footer_bottom">
                
    <!--                <aside>-->

                            <div class="footer_left">
                                <ul>
                                  <li><a href="https://greengrade.co.uk/terms-and-conditions">Terms &amp; Conditions</a></li>
                                  <li><a href="https://greengrade.co.uk/Cookies">Cookies Policy</a></li>
                                  <li><a href="https://greengrade.co.uk/disclaimer">Disclaimer</a></li>
                                </ul>
                            </div>

    <!--                </aside>-->

                    <div class="footer_right">
                        <strong>Copyright &copy; Green Grade Solutions Ltd 2014</strong>
                    </div>

                </div>
                
                <div class="clear"></div>
                
            </footer>
            

          </div>    <!-- body_mid_wrap end -->

          

      </div>    <!-- body_wrapper end -->

       
  </body>
</html>
