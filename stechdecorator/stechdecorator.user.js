// ==UserScript==
// @name         Stech decorator
// @version      1
// @require      https://cdnjs.cloudflare.com/ajax/libs/arrive/2.4.1/arrive.min.js
// @description  ARCS(basic research) & AMASE(firmenpartnerprojekt)
// @author       Vark
// @include      https://stechuhr.vrvis.at/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const r0 = /arcs/gi;
    const o0 = "ARCS(basic research)";
    const r1 = /amase/gi;
    const o1 = "AMASE(firmenpartnerprojekt)";
    document.arrive("div",function(d) {
        d.childNodes.forEach(function(c){
            if(c.nodeType==3){
                c.textContent=c.textContent.replace(r0,o0);
                c.textContent=c.textContent.replace(r1,o1);
            }
        });
    });
})();