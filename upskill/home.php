<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Green Grade | Upskil</title>
        <link rel="stylesheet" href="css/reset.css" type="text/css" media="screen" />
        <link rel="stylesheet" href="css/responsive.css" type="text/css" media="screen" />
        <!-- <link href="lightbox/css/lightbox.css" rel="stylesheet" /> -->
        <!-- <link href='http://fonts.googleapis.com/css?family=Open+Sans|Baumans' rel='stylesheet' type='text/css'> -->
        
        <script src="js/vendor/modernizr.min.js"></script>
        <script src="js/vendor/respond.min.js"></script>
        
        
        <script src="js/jquery-1.9.1.min.js"></script>
        <!--script type="text/javascript">window.jQuery || document.write('<script type="text/javascript" src="js\/vendor\/1.7.2.jquery.min"><\/script>')</script-->
        
        
        <!--script src="js/vendor/prefixfree.min.js"></script-->
        <script src="js/vendor/jquery.slides.min.js"></script>
        <script src="js/script.js"></script>

        <script>
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

            
               /* jQuery(window).resize(function() {
                    var hgt = jQuery(window).height() - 427;
                    var wid = jQuery(window).width() - 633;
                    jQuery('#slider_wrap img').css({
                        width:wid,
                        height:hgt
                    });
                    jQuery('#slider_wrap').height(hgt);
                    jQuery('#slider_wrap img').width(jQuery(this).width());
                });*/
             

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
                    //alert(1)

                    jQuery(".read_more ").css({'margin-top': (82)+'px'});
                    //jQuery("#about_read_more ").css({'margin-top': (57)+'px'});
                }


            });

        </script>
        
        
  </head>

  <body>
       
      <div class="body_wrapper">

          <div class="body_mid_wrap">
          
              <?php include('header.php'); ?>

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
                            <img src="slider_pics/11.jpg" alt="Some alt text" class="slider_img">
                            <img src="slider_pics/22.jpg" alt="Some alt text" class="slider_img">      
                            <img src="slider_pics/33.jpg" alt="Some alt text" class="slider_img">
                            <img src="slider_pics/44.jpg" alt="Some alt text" class="slider_img">
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
                    <div class="read_more"><a href=""> Read more...</a></div>
                </article>
                <article>                    
                    <div class="icon_bar">
                        <img src="img/camera.png" id="icon_camera" class="icon">
                   </div>       
                    <h1>UpSkill Course</h1>
                    <p>         
                        To ensure lasting change at multiple levels of the factory, UpSkill modules address subjects such as working conditions, hygiene, safety and collective bargaining.
                    </p>
                    <div class="read_more" id="course_read_more"><a href=""> Read more...</a></div>
                </article>
                <article>                   
                    <div class="icon_bar">
                        <img src="img/icon_msg.png" id="icon_msg" class="icon">
                   </div>         
                    <h1>About Us</h1>
                    <p style="padding-bottom: 50px;">         
                        UpSkill a ground breaking learning platform, Upskill by GreenGrade Solutions was awarded UK aid funding in January 2014.
                    </p>
                    <div class="read_more" id="about_read_more"><a href=""> Read more...</a></div>
                </article>
                <article>                   
                    <div class="icon_bar">
                        <img src="img/star.png" id="" class="icon">
                   </div>                
                    <h1>Partners</h1>
                    <p>         
                        UpSkill is endorsed by major retailers, brands and factories and its syllabus was peer reviewed by the global audit firm Bureau Veritas for quality assurance purposes.
                    </p>
                    <div class="read_more"><a href=""> Read more...</a></div>
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

            

            
                <?php include('footer.php'); ?>
            

          </div>    <!-- body_mid_wrap end -->

          

      </div>    <!-- body_wrapper end -->

       
  </body>
</html>
