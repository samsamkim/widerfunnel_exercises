// Bonus Experiment
// (this exercise is optional)
// Control: https://www.dollarshaveclub.com/
// View Port: Desktop
// Important: Make sure you’re on the US site and only code in Vanilla Javascript.
// 1. Replace hero title from “A top-shelf grooming routine. Personalized for you.” to “Personalized for you.”
// 2. Clicks on hero “Get Started” button (which will take you to /get-started/quiz page)
// 3. Then go back to the homepage by either clicking on the site logo or clicking the back button on the
// browser.
// 4. Make sure the hero title remains the same as Step 1.

document.querySelector('.hero__title').innerText = "Personalized for you"

history.pushState = ( f => function pushState(){
  var ret = f.apply(this, arguments);
  window.dispatchEvent(new Event('pushstate'));
  window.dispatchEvent(new Event('locationchange'));
  return ret;
})(history.pushState);

history.replaceState = ( f => function replaceState(){
  var ret = f.apply(this, arguments);
  window.dispatchEvent(new Event('replacestate'));
  window.dispatchEvent(new Event('locationchange'));
  return ret;
})(history.replaceState);

window.addEventListener('popstate',()=>{
  window.dispatchEvent(new Event('locationchange'))
});


window.addEventListener('locationchange', function(){
  function textChanger() {
    if (document.querySelector('.hero__title')) {
      document.querySelector('.hero__title').innerText = 'Personalized for you'
    } else {
      setTimeout(textChanger, 15);
    }
  }
  
  if (window.location.href === "https://www.dollarshaveclub.com/") {
    textChanger()
  }
})