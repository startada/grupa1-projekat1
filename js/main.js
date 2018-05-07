/**
 * User: Agenzzia
 * Web:  www.agenzzia.com
 * Date: 5/31/2017
 * Time: 11:55 AM
 */
"use strict";
(function() {
    var mobileMenuTrigger = $('.navigation-trigger a:last-child');
    var articleContainer = $('.article-container');
    var articleContainerHalf = $('.article-container.half');
    var articleContent = articleContainerHalf.find('.article-content');
    var articleImage = articleContainerHalf.find('.article-image');
    var articleTitle = articleContainerHalf.find('h2');
    var highestOne = Number.MIN_VALUE;
    var loadMoreToggleButton = $('.load-more-button-container  a');
    var student = {
        "ime"    : "Milojko",
        "prezime": "Kostic",
        "index"  : {
            "broj-indexa"     : 1234,
            "godina-izdavanja": 2017,
            "pametan"         : false
        }
    }



    /**
     * events
     */

    var headerContainer = $('.head-content-wrapper');
    var footerContainer = $('.footer-content-wrapper');

    console.log($('.owl-carousel').length);
    if($('.owl-carousel').length){
        $('.owl-carousel').owlCarousel({
            loop   : true,
            margin : 10,
            nav    : true,
            dots   : true,
            navText: ["milojko", "radojko"],
            items  : 1
        });
    }


    headerContainer.load('header.html', function() {
        var mobileMenuTrigger = $('.navigation-trigger a:last-child');
        if(utilities.IsExisty(mobileMenuTrigger)){
            mobileMenuTrigger.click(function(ev) {
                var linksContainer = $('.mobile-links-list-container');
                var currentState = linksContainer.css('display');
                linksContainer.slideToggle();
                var icon = $(this).find('i');
                switch(currentState) {
                    case 'none':
                        icon.removeClass();
                        icon.addClass('fa fa-times');
                        return false;
                        break;
                    case 'block':
                        icon.removeClass();
                        icon.addClass('fa fa-bars');
                        break;
                }

            });
        }
    });
    footerContainer.load('footer.html');

    utilities.MoveExistingImagesToContainerBackgroundCover();

    $(window).on('load', function() {
        // articleContent.each(function(){
        //     var tempHight=  $(this).height();
        //     if(tempHight>highestOne){
        //         highestOne = tempHight;
        //     }
        // });
        //
        // articleContent.height(highestOne);
        articleImage.each(function() {
            $(this).append('<i class="fa fa-search-plus"></i>')
        });

        articleContainer.each(function() {
            $(this).append('<a href="single-post-full.html" class="article-learn-more">Learn More</a>');
        });
        $(window).trigger('resize');

    });

    $(window).resize($.throttle(400, function() {
        utilities.EqualizeElementsHeightByRow('.article-title');
        utilities.EqualizeElementsHeightByRow(articleContent);
        if(utilities.CheckMedia() < 768){
            console.log('lima care');
        }
    }));

    loadMoreToggleButton.click(function() {

        // if($('.togggle').hasClass('openned')){
        //     $(this).html('Load More')
        // }
        // else{
        //     $(this).html('Show Less');
        // }

        $(this).toggleClass('openned');

        $('.togggle').toggleClass('openned');
        if($(this).find('span').html() === 'Load More '){
            $(this).find('span').html('Show Less ');
        }
        else {
            $(this).find('span').html('Load More ');
        }

    });
    
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/posts/',
        dataType:'json',

        success:function(data){
            console.log(data);
            var length = data.length;
            for(var i = 0; i < length; i++) {
                // var obj = data[i];
                // console.log(obj.ime);
                // console.log(obj.prezime);
                // console.log(obj.godina);
                // console.log(obj.zaposlen);
                // console.log('------------');

            }

        },
        error:function(data){
            console.log('ERROR', data);
        }
    });


}());


