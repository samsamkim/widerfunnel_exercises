// #3 - Create filter for selecting most suitable plan
// Control: https://envoy.com/pricing/
// View Port: Desktop
// Note: You can use any icons of your choice.
// 1. Add list of filters after hero text (Badge printing, Legal document signing, Visitor photos, Multiple sign-in
// flows, Visitor screening and Delivery notifications)
// 2. When a user selects “Badge printing”, add the “We recommend” banner on top of the Standard Plan. When
// a user unselect “Badge printing”, remove the “We recommend” banner.
// 3. When a user selects “Visitor screening” and “Delivery notifications”, add the “We recommend” banner on
// top of the Premium Plan.
// 4. When a user selects all the badges, add the “We recommend” banner on top of the Enterprise Plan.


$(document).ready(function(){

  // Load fontawesome
  $('head').prepend("<script src='https://use.fontawesome.com/releases/v5.12.1/js/all.js' data-auto-a11y='true'></script>")

  // Create and append filter section
  var newSection = "<section class='filter-container lg-px3 mx-auto py5' style='max-width: 68rem; display: flex;'> <div class='col-2 px1'> <div id='badge-printing-container' class='badge-container bg-white light-shadow rounded center py3 px1' style='height:100%;'> <i class='fas fa-file-alt py2' style='width:75px; height:75px;'></i> <p>Badge Printing</p> </div> </div> <div class='col-2 px1'> <div class='badge-container bg-white light-shadow rounded center py3 px1' style='height:100%;'> <i class='fas fa-file-alt py2' style='width:75px; height:75px;'></i> <p>Legal document signing</p> </div> </div> <div class='col-2 px1'> <div class='badge-container bg-white light-shadow rounded center py3 px1' style='height:100%;'> <i class='fas fa-file-alt py2' style='width:75px; height:75px;'></i> <p>Visitor photos</p> </div> </div> <div class='col-2 px1'> <div class='badge-container bg-white light-shadow rounded center py3 px1' style='height:100%;'> <i class='fas fa-file-alt py2' style='width:75px; height:75px;'></i> <p>Multiple sign-in flows</p> </div> </div> <div class='col-2 px1'> <div id='visitor-container' class='badge-container bg-white light-shadow rounded center py3 px1' style='height:100%;'> <i class='fas fa-file-alt py2' style='width:75px; height:75px;'></i> <p>Visitor screening</p> </div> </div> <div class='col-2 px1'> <div id='delivery-container' class='badge-container bg-white light-shadow rounded center py3 px1' style='height:100%;'> <i class='fas fa-file-alt py2' style='width:75px; height:75px;'></i> <p>Delivery notification</p> </div> </div></section>";

  $("#top-pricing-section section:first-child").after(newSection);

  var recommendBox = "<div id='recommend-box' style='left: 0; background-color: red; color: white; width: 100%; position: absolute; top: -30px; text-align: center; padding: 5px 0 5px 0;' class='rounded-top'>We recommend</div>"

  // Actions performed when clicking on the badge containers
  $('.badge-container').click(function(){
    $(this).toggleClass('red');

    if ($('.badge-container.red').length == 6) {
      addRecommendBoxTo('Enterprise')

    } else if ($('#badge-printing-container').hasClass('red') && !$('.badge-container:not(#badge-printing-container)').hasClass('red')) {
      addRecommendBoxTo('Standard');

    } else if ($('#visitor-container').hasClass('red') && $('#delivery-container').hasClass('red') && !$('.badge-container:not(#delivery-container,#visitor-container)').hasClass('red')) {
      console.log('test');
      addRecommendBoxTo('Premium');

    } else {
      $('#recommend-box').detach();
    }
  })

  function addRecommendBoxTo(titleText) {
    $('#recommend-box').detach();
    $( ".lg-col-3 > .pricing-card > h3:contains(" + titleText + ")" ).parent().css('position', 'relative').prepend(recommendBox);
  }
})