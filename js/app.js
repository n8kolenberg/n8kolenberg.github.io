// $(function(){


$('#nav').on('sticky-start', function() {
  $(this).css({
    "background-color": "rgba(246, 246, 246, 0.95)",
    "z-index": 100
  });
}) //End on sticky-start
.on('sticky-end', function() {
    $(this).css({
        "background-color": "rgba(246, 246, 246, 0.5)"
    });
}); //End on sticky-end


$('#nav').sticky();



// init cubeportfolio
     $('#js-grid-awesome-work').cubeportfolio({
        filters: '#js-filters-grid-awesome-work',
        loadMore: '#js-loadMore-awesomeWork',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        sortToPreventGaps: true,
        mediaQueries: [{
            width: 1200,
            cols: 4
        }, {
            width: 1000,
            cols: 3
        }, {
            width: 500,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'sequentially',
        displayTypeSpeed: 100,
    });

        $(document).on("click", "#nav li a, .icon-down-open, .icon-up-open", function(event){        
            event.preventDefault();
        
            //This should set the variable "page" as either #home, #profile, #portfolio, or #contact:
            if( $(this).attr("href") ) {
                var page = $(this).attr("href");
            }
            else {
                var page = $(this).closest("a").attr("href");
            }
                
            //For soft-scrolling:       
            if( $("header").css("display") === "none" ) {
                $("html, body").animate({ scrollTop: parseInt( $(page).position().top )}, 1000);  //Soft-scroll for mobile devices.
            }
            else {
                $("html, body").animate({ scrollTop: parseInt( $(page).position().top ) - 50 }, 1000);  //Soft-scroll for Desktops. (Accounts for fixed menu at the top.)
            }   
    }); // End on click


// }); //End ready