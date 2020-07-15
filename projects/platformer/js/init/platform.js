(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the createPlatform Function to create platforms for the level. 
     * 
     * createPlatform() takes these arguments:
     *      
     *      createPlatform(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    function init(game) {
        let createPlatform = platform.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        createPlatform(0, game.world.height - 32, 3, 2);    // DO NOT DELETE

        // example:
        createPlatform(800, 10, 0.3, 90);
        createPlatform(680, 10, 0.3, 90);
        createPlatform(650, 10, 0.3, 90);
        createPlatform(175, 300, 0.3);
        createPlatform(100, 600, 0.5);
        createPlatform(300, 500, 0.8);
        createPlatform(650, 10, 0.9);
        createPlatform(290, 300, 0.3);
        createPlatform(175, 100, 0.6);
        createPlatform(175, 100, 0.01, 7);
        createPlatform(300, 500, 0.9, 5);
        createPlatform(100, 1000, 0.8, 7);
        createPlatform(500, 300, 0.3);
        createPlatform(500, 300, 0.4, 7);
        createPlatform(400, 400, 0.3, 7);
            
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    }
    platform.init = init;
})(window);