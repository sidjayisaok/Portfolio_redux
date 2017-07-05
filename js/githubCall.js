// ajax jQuery call to fetch github information
    $.ajax({
        url: "https://api.github.com/users/sidjayisaok",
        method: 'GET',
        dataType: 'json'
    }).done(function(res){
    //    convert date to useable format
       var myDate = new Date(res.created_at);
    //    target DOM element
       var myGithub = $(".myGithub");
    //    create a p and img DOM
       var p = $("<p>");
       var img = $("<img>");
    //    attached created information to DOM
       myGithub.append(p);
       p.append(img);
    //    minor styling of DOM
       p.css("margin", "5%");
       p.css("padding", "5%");
       p.css("background-color", "#CFFFFF");
    //    append fetched information to DOM
       p.append("<br>" + res.name + " Github handle : " + res.login + "<br>");
       p.append("Public repos on Github : " + res.public_repos + "<br>");
       p.append("Public Gists on Github : " + res.public_gists + "<br>");
       p.append("Github acct. created on : " + myDate + "<br>");
       p.append("Number of Github followers : " + res.followers + "<br>");
       p.append("Github users currently following me : " + res.following + "<br>");
    //    create inner attributes for image
       img.attr("src", res.avatar_url);
       img.attr("alt", "my Github Avatar");
       img.attr("href", "https://github.com/sidjayisaok");
       img.attr("target", "_blank");
       img.attr("rel", "noopener");
    }).fail(function(err){
        // console log if there are any errors to dev terminal
        console.log('An error occured: ' + err.status);
    });