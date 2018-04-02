/**
 * User: Agenzzia
 * Web:  www.agenzzia.com
 * Date: 5/31/2017
 * Time: 11:55 AM
 */
"use strict";
(function() {
    var mobileMenuTrigger = $('.navigation-trigger a:last-child');
    var articleContent = $('.article-container.half').find('.article-content');
    var articleTitle = $('.article-container.half').find('h2');
    var highestOne = Number.MIN_VALUE;
    var loadMoreToggleButton = $('.load-more-button-container  a');

    /**
     * events
     */

    var headerContainer = $('.head-content-wrapper');
    var footerContainer = $('.footer-content-wrapper');

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

        $(window).trigger('resize');

    });

    $(window).resize($.throttle(400, function() {
        utilities.EqualizeElementsHeightByRow('.article-title');
        utilities.EqualizeElementsHeightByRow(articleContent);

    }));

    loadMoreToggleButton.click(function() {

        // if($('.togggle').hasClass('openned')){
        //     $(this).html('Load More')
        // }
        // else{
        //     $(this).html('Show Less');
        // }

        $('.togggle').toggleClass('openned');
        if($(this).html() === 'Load More'){
            $(this).html('Show Less');
        }
        else {
            $(this).html('Load More')
        }

    });
}());


