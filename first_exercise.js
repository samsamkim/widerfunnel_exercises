// #1 - Popup modal
// Control: https://login.getsling.com/register
// View Port: Desktop
// Notes: You use any images/icons of your choice.
// 1. Click “login in” to open the popup modal
// 2. Show a popup modal with overlay
// 3. Add a ‘X’ functionality to close the modal


// Inject Jquery first
var jqry = document.createElement('script');
jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jqry);
jQuery.noConflict();

// Load document code after Jquery is loaded

// Clicking on the Login at the bottom of the "https://login.getsling.com/register" page makes the popup reappear
$(document).ready(function(){
  $("<span class='close modal-close' style='margin-left: auto;'>x</span>").insertBefore('.wf-modal-header');

  $('.modal-close').click(function(){
    $('.wf-modal-container').hide();
  })

  $('signup-footer').find('p').find('a').click(function(e){
    e.preventDefault();
    $('.wf-modal-container').css('display', 'flex');
  })
})