//using waypoint.js to trigger events work on making it DRY in the future
$(document).ready(function(){
 
  // hide element on page load
  $('#banner').css('opacity', 0);
  //load element on scroll
  $('#banner').waypoint(function() {
      $('#banner').addClass('animated fadeInLeft');
  }, { offset: '50%' });

  // hide element on page load
  $('#melange').css('opacity', 0);
  //load element on scroll
  $('#melange').waypoint(function() {
      $('#melange').addClass('animated fadeInRight');
  }, { offset: '50%' });

  // hide element on page load
  $('#movieGazer').css('opacity', 0);
  //load element on scroll
  $('#movieGazer').waypoint(function() {
      $('#movieGazer').addClass('animated fadeInLeft');
  }, { offset: '50%' });

   // hide element on page load
  $('#sniphy').css('opacity', 0);
  //load element on scroll
  $('#sniphy').waypoint(function() {
      $('#sniphy').addClass('animated fadeInRight');
  }, { offset: '50%' });

   // hide element on page load
  $('#linkedin').css('opacity', 0);
  //load element on scroll
  $('#linkedin').waypoint(function() {
      $('#linkedin').addClass('animated fadeInLeft');
  }, { offset: '90%' });

   // hide element on page load
  $('#twitter').css('opacity', 0);
  //load element on scroll
  $('#twitter').waypoint(function() {
      $('#twitter').addClass('animated fadeInRight');
  }, { offset: '90%' });

   // hide element on page load
  $('#github').css('opacity', 0);
  //load element on scroll
  $('#github').waypoint(function() {
      $('#github').addClass('animated fadeInLeft');
  }, { offset: '90%' });

   // hide element on page load
  $('#wordpress').css('opacity', 0);
  //load element on scroll
  $('#wordpress').waypoint(function() {
      $('#wordpress').addClass('animated fadeInRight');
  }, { offset: '90%' });
 
});