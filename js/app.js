// $(function(){


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



// }); //End ready