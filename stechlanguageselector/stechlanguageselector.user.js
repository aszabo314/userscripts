// ==UserScript==
// @name         Stech language selector
// @version      1
// @history      1 Initial
// @downloadURL  https://github.com/aszabo314/userscripts/raw/master/stechlanguageselector/stechlanguageselector.user.js
// @updateURL    https://github.com/aszabo314/userscripts/raw/master/stechlanguageselector/stechlanguageselector.user.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/arrive/2.4.1/arrive.min.js
// @description  default to english
// @author       Vark
// @include      https://stechuhr.vrvis.at/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const want='ENG';
    function fix(d) {
        if(d.id.toLowerCase=='language'){
            d.value=want;
        }
    }
    document.getElementById('language').value=want;
    document.arrive("select",function(d) {fix(d)});
})();