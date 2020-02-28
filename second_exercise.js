// #2 - Credit Banner trigger via user scroll
// Control: https://instantink.hpconnected.com/us/en/l/
// View Port: Mobile
// 1. Create a stick banner at the bottom of the page
// 2. Trigger the banner only when the user scroll passed the id=”plans-sections” element.
// 3. If the user scroll back to the top of the page, hide the banner.
// 4. If the user clicks on the ‘X’, don’t show the banner again.


// Inject Jquery first
var jqry = document.createElement('script');
jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jqry);
jQuery.noConflict();

// Load document code after Jquery is loaded

$(document).ready(function(){

  // Create banner and append to body
  var text_tester = "<div class='stick-banner-bottom' style='display: none;'> <div style='display: flex; position: fixed; z-index: 1; bottom: 0; background-color: white; padding: 10px 10px 10px 40px;'> <div> <div style='padding: 5px 10px 10px 0;'>Get $10 credit towards your plan and try HP Instant Ink for <b>FREE</b> today. No commitments or fees - change or cancel your plan anytime.</div> <button style='color: blue; padding: 10px 20px 10px 20px; background-color: white; border-radius: 5px; border: 1px solid blue; box-shadow: none;'>Get my free ink</button> </div> <div style='border-radius: 50%; border: 1px solid gray; display: flex; justify-content: center; align-items: center; height: fit-content;'><span style='color: darkslategray; width: 24px; height: 24px;' class='close banner-close'>x</div> </div></div>"

  $('body').append(text_tester)

  // Stick banner shows only after the plans-section element has been passed. Disappears if top reached or "x" clicked.
  $(window).scroll(function() {
    var hT = $('#plans-section').offset().top,
        hH = $('#plans-section').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
      if ($('.stick-banner-bottom') && (wS > (hT+hH-wH)) ){
        $('.stick-banner-bottom').show();
      } else if(wS == 0) {
        $('.stick-banner-bottom').hide();
      }
   });
  
   $('.banner-close').click(function(){
     $('.stick-banner-bottom').remove();
   })
})
