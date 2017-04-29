//using waypoint.js to trigger events
$(document).ready(function(){

 //variables used for transitions
 var banner = '#banner';
 var melange = '#melange';
 var movieGazer = '#movieGazer';
 var sniphy = '#sniphy';
 var linkedin = '#linkedin';
 var twitter = '#twitter';
 var github = '#github';
 var contact = '#contact';
 var wordpress = '#wordpress';
 var offsetA = '75%';
 var offsetB = '90%';

 //function to execute animations when they appear on the screen via waypoint.js
 function callAnim(param, thisOffset){
  // hide element on page load
  $(param).css('opacity', 0);
  //load element on scroll
  $(param).waypoint(function() {
      $(param).addClass('animated fadeInLeft');
  }, { offset: thisOffset });
 }

//call the functions
 callAnim(banner, offsetA);

 callAnim(melange, offsetA);

 callAnim(movieGazer, offsetA);

 callAnim(sniphy, offsetA);

 callAnim(contact, offsetA);

 callAnim(linkedin, offsetB);

 callAnim(twitter, offsetB);

 callAnim(github, offsetB);

 callAnim(wordpress, offsetB);


});