//controller
portfolioApp.controller('portfolioController', function($scope){
    //buttons and modal template
    $scope.portfolio =[
        {
            name:'Heart Range Calculator',
            url:'http://heartrangeapp.herokuapp.com/',
            image:'assets/HeartRange.png',
            github: 'https://github.com/sidjayisaok/Heart_rate_estimator',
            modal: 'blogModal',
            class: 'site1',
            summary: 'A heart range calculator using Angular.js. Results are rendered on the fly. Technology includes Angular.js, Node.js, jQuery, Animate.css. Check out the sGithub repo for more information.'
        },
        {
            name:'Melange: a d3.js project',
            url:'https://melangeapp.herokuapp.com/',
            image:'assets/Melange.png',
            github: 'https://github.com/sidjayisaok/melange',
            modal: 'melangeModal',
            class: 'site2',
            summary: 'A website using d3.js to display information for several tools. The Websites include a restaurant calculator, a currency converter, a restaurant ratings aggregator, and a BMI calculator. Technology used: Bootstrap, d3.js, animate.css, node.js, ES6, jQuery and more. Check out the Github repo for more information.'
        },
        {
            name:'Movie Gazer',
            url:'https://moviegazer-b969d.firebaseapp.com/',
            image:'assets/MovieGazer.png',
            github: 'https://github.com/sidjayisaok/OMDb-API-Test',
            modal: 'gazerModal',
            class: 'site3',
            summary: 'A website aggregating movie reviews using wikipedia and IMDb. The website is constantly in evolution, as I add more features to it that I learn. Technology used: Bootstrap, d3.js, animate.css, jQuery and more. Check out the Github repo for more information.'
        },
        {
            name:'Sniphy: random gifs',
            url:'https://sniphyapp.herokuapp.com/?',
            image:'assets/Sniphy.png',
            github: 'https://github.com/sidjayisaok/Animaltastic',
            modal: 'sniphyModal',
            class: 'site4',
            summary: 'A website returning gifs via Giphy. The website is designed to be simple to use, allowing users to play and pause gifs, and share links to friends. Technology used: Bootstrap, animate.css, jQuery and more. Check out the Github repo for more information.'
        }                          
    ];
    // social-media buttons template
    $scope.social = [
        {
            id: 'linkedin',
            url: 'https://www.linkedin.com/in/sidjay?trk=nav_responsive_tab_profile',
            image: 'assets/LinkedIn.png',
            class: 'image1'
        },
        {
            id: 'twitter',
            url: 'https://twitter.com/SidJayisAOK',
            image: 'assets/Twitter.png',
            class: 'image2'
        },
        {
            id: 'github',
            url: 'https://github.com/sidjayisaok',
            image: 'assets/GitHub.png',
            class: 'image3'
        },
        {
            id: 'wordpress',
            url: 'https://sidjayisaok.wordpress.com',
            image: 'assets/Wordpress.png',
            class: 'image4'
        }        
    ]; 
});