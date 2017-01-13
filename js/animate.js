//variables used for thumbnails
var adiosClass = "animated lightSpeedOut";
var turnClass = "animated flip";
var site1 = '.site1';
var site2 = '.site2';
var site3 = '.site3';
var site4 = '.site4';

//variables used for social media buttons
var flipClass = "animated zoomOut";
var tadaClass = 'animated pulse';
var image1 = '.image1';
var image2 = '.image2';
var image3 = '.image3';
var image4 = '.image4';
var logo = '#logo';
var contactBtn = ".contactBtn";
var closeBtn = ".closeBtn";
var heartBtn = ".heartBtn";
var melangeBtn = ".melangeBtn";
var gazerBtn = ".gazerBtn";
var sniphyBtn = ".sniphyBtn";

//DRY version to control image animation
function logicAnim(param, classA, classB){

    var endClass ='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

     $(param).on({
        'click': function(){
            $(param).addClass(classA).one(endClass, function(){
                $(this).removeClass(classA);
            })
        },

        'mouseover': function(){
            $(param).addClass(classB).one(endClass, function(){
                $(this).removeClass(classB);
            })
        }
    });
}
//call functions here for images
logicAnim(site1, adiosClass, turnClass);

logicAnim(site2, adiosClass, turnClass);

logicAnim(site3, adiosClass, turnClass);

logicAnim(site4, adiosClass, turnClass);

//call functions here for social media
logicAnim(image1, flipClass, tadaClass);

logicAnim(image2, flipClass, tadaClass);

logicAnim(image3, flipClass, tadaClass);

logicAnim(image4, flipClass, tadaClass);

logicAnim(logo, flipClass, tadaClass);

logicAnim(contactBtn, flipClass, tadaClass);

logicAnim(closeBtn, flipClass, tadaClass);

logicAnim(heartBtn, flipClass, tadaClass);

logicAnim(melangeBtn, flipClass, tadaClass);

logicAnim(gazerBtn, flipClass, tadaClass);

logicAnim(sniphyBtn, flipClass, tadaClass);

