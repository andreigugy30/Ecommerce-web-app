$(document).ready(function () {

    //1. Calling Login Form
    $(".btn-log").click(function () {
        $(".popupContainer").show();
        return false;
    });
  
    //2. Homepage Thumbnails Hover

    // Mouseenter Event
    $('.homepage .thumbnail').on('mouseenter', function(){

      var caption = $(this).children('.caption');
      caption.children('h3').hide();
      caption.children('.action-btn').show();

    });

    // Mouseleave Event
    $('.homepage .thumbnail').on('mouseleave', function(){

      var caption = $(this).children('.caption');
      caption.children('h3').show();
      caption.children('.action-btn').hide();

    });

    //3. Setting the carousel interval to false

    $('.carousel').carousel({
      interval: false
    });

    //4. Blog news displayed every 5 seconds

    var news= $('.news');
    var newsIndex= -1;

    function showNextPost(){
      ++newsIndex;
      news.eq(newsIndex % news.length).fadeIn(2000).delay(5000).fadeOut(2000, showNextPost);
    }

     showNextPost();


     //5. Filtering the shoes brand

      $('.shop-by .brands a').on('click', function(){

          //Ading the current class
          $('.shop-by .brands li.current').removeClass('current');
          $(this).parent().addClass('current');

          // Set the heading text for every brand
          $('.homepage h2').text($(this).text());

          // Filter 
          var category = $(this).text().toLowerCase().replace(' ','-').replace(/&/g ,'-');

          //Remove hidden class if All products is selected
          if(category == 'all-products'){
            $('.homepage .thumbnail:hidden').fadeIn('slow').removeClass('hidden');
          }else{
            $('.homepage .thumbnail').each(function(){
                if(!$(this).hasClass(category)){
                  $(this).hide().addClass('hidden');
                }else{
                  $(this).fadeIn('slow').removeClass('hidden');
              }
            });
          }
          return false;
      });


      //6. Switch products view between grid/list style

      var element = $('div.col-xs-4.col-sm-4.col-md-4.hero-feature'); // Element where the style is changing
      
      // Click on the Filter grid/list

      $('.filter a').on('click', function(e){
          if($(this).hasClass('grid-view')){
            element.fadeOut(1000, function(){
                element.removeClass('col-xs-12 col-sm-12 col-md-12').addClass('col-xs-4 col-sm-4 col-md-4');
                  element.fadeIn(1000);
            });
          } else if($(this).hasClass('list-view')){
              element.fadeOut(1000, function(){
                  element.removeClass('col-xs-4 col-sm-4 col-md-4').addClass('col-xs-12 col-sm-12 col-md-12');
                    element.fadeIn(1000);
              });

          }

      });



    });



  

 
  
  

   



