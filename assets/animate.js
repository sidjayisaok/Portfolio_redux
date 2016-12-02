$(function(){
    let flipClass = "animated zoomOut";
    let turnClass = "animated flip";
    let adiosClass = "animated lightSpeedOut";
    let tadaClass = 'animated pulse';
    let endClass ='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    //target portfolio thumbnails

    $('.site1').on({
        'click': ()=>{
            $('.site1').addClass(adiosClass).one(endClass, function(){
                $(this).removeClass(adiosClass);
            })
        },

        'mouseover': ()=>{
            $('.site1').addClass(turnClass).one(endClass, function(){
                $(this).removeClass(turnClass);
            })
        }
    });

    $('.site2').on({
        'click': ()=>{
            $('.site2').addClass(adiosClass).one(endClass, function(){
                $(this).removeClass(adiosClass);
            })
        },

        'mouseover': ()=>{
            $('.site2').addClass(turnClass).one(endClass, function(){
                $(this).removeClass(turnClass);
            })
        }
    });

    $('.site3').on({
        'click': ()=>{
            $('.site3').addClass(adiosClass).one(endClass, function(){
                $(this).removeClass(adiosClass);
            })
        },

        'mouseover': ()=>{
            $('.site3').addClass(turnClass).one(endClass, function(){
                $(this).removeClass(turnClass);
            })
        }
    });

    $('.site4').on({
        'click': ()=>{
            $('.site4').addClass(adiosClass).one(endClass, function(){
                $(this).removeClass(adiosClass);
            })
        },

        'mouseover': ()=>{
            $('.site4').addClass(turnClass).one(endClass, function(){
                $(this).removeClass(turnClass);
            })
        }
    });

    //target social media buttons

    $('.image1').on({
        'click': ()=>{
            $('.image1').addClass(flipClass).one(endClass, function(){
                $(this).removeClass(flipClass);
            })
        },

        'mouseover': ()=>{
            $('.image1').addClass(tadaClass).one(endClass, function(){
                $(this).removeClass(tadaClass);
            })
        }
    });

    $('.image2').on({
        'click': ()=>{
            $('.image2').addClass(flipClass).one(endClass, function(){
                $(this).removeClass(flipClass);
            })
        },

        'mouseover': ()=>{
            $('.image2').addClass(tadaClass).one(endClass, function(){
                $(this).removeClass(tadaClass);
            })
        }
    });

    $('.image3').on({
        'click': ()=>{
            $('.image3').addClass(flipClass).one(endClass, function(){
                $(this).removeClass(flipClass);
            })
        },

        'mouseover': ()=>{
            $('.image3').addClass(tadaClass).one(endClass, function(){
                $(this).removeClass(tadaClass);
            })
        }
    });

    $('.image4').on({
        'click': ()=>{
            $('.image4').addClass(flipClass).one(endClass, function(){
                $(this).removeClass(flipClass);
            })
        },

        'mouseover': ()=>{
            $('.image4').addClass(tadaClass).one(endClass, function(){
                $(this).removeClass(tadaClass);
            })
        }
    });
});