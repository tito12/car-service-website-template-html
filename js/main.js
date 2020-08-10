/*!
 * Copyright (C) 2020 https://better-web.net/ - A project by Vladyslav Sedenko, Patryk Lauf. All rights reserved.
 */

"use strict";

/*==============================================================
Animation init
==============================================================*/
function initAnimation() {
    window.wow = new WOW({
        boxClass: "wow",
        animateClass: "animated"
    });
    window.wow.init();
}

/*==============================================================
 Init scripts on document ready
 ==============================================================*/
$(document).ready(function() {
    initAnimation();
});