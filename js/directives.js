//directive
portfolioApp.directive('portfolioButtons', function(){
    return {
        restrict : 'E',
        templateUrl: '../portfolio-buttons.htm'
    };
})
.directive('socialMedia', function(){
    return {
        restrict: 'E',
        templateUrl: '../social-media.htm'
    };
});