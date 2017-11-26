//using waypoint.js to trigger events
document.addEventListener("DOMContentLoaded", function(){

 //variables used for transitions
 const banner = '#banner';
 const melange = '#melange';
 const movieGazer = '#movieGazer';
 const sniphy = '#sniphy';
 const linkedin = '#linkedin';
 const twitter = '#twitter';
 const github = '#github';
 const myGithub = ".myGithub";
 const contact = '#contact';
 const wordpress = '#wordpress';
 const offsetA = '75%';
 const offsetB = '90%';

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

 callAnim(myGithub, offsetA);

 callAnim(linkedin, offsetB);

 callAnim(twitter, offsetB);

 callAnim(github, offsetB);

 callAnim(wordpress, offsetB);


});