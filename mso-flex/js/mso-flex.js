'use strict'
const doc = window.document;
const docEl = doc.documentElement;
let metaEl = doc.querySelector('meta[name="viewport"]');
let dpr=0,scale=0,tid=null;
let msoFlex = {};

if (!dpr && !scale) {
    const devicePixelRatio = window.devicePixelRatio;
    if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {                
        dpr = 3;
    } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
        dpr = 2;
    } else {
        dpr = 1;
    }
    scale = 1 / dpr;
}
docEl.setAttribute('data-dpr', dpr);
if (!metaEl) {
    metaEl = doc.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
    if (docEl.firstElementChild) {
        docEl.firstElementChild.appendChild(metaEl);
    } else {
        const wrap = doc.createElement('div');
        wrap.appendChild(metaEl);
        doc.write(wrap.innerHTML);
    }
}
const refreshRem = function(){
    const width = docEl.getBoundingClientRect().width;
    const rem = width / 10;
    docEl.style.fontSize = rem + 'px';
    msoFlex.rem = rem;
}

window.addEventListener('resize', function() {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 300);
}, false);
window.addEventListener('pageshow', function(e) {
    if (e.persisted) {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }
}, false);
if (doc.readyState === 'complete') {
    doc.body.style.fontSize = 12 * dpr + 'px';
} else {
    doc.addEventListener('DOMContentLoaded', function(e) {
        doc.body.style.fontSize = 12 * dpr + 'px';
    }, false);
}

refreshRem();
msoFlex.dpr = dpr;
msoFlex.refreshRem = refreshRem;
msoFlex.rem2px = function(d) {
    var val = parseFloat(d) * this.rem;
    if (typeof d === 'string' && d.match(/rem$/)) {
        val += 'px';
    }
    return val;
}
msoFlex.px2rem = function(d) {
    var val = parseFloat(d) / this.rem;
    if (typeof d === 'string' && d.match(/px$/)) {
        val += 'rem';
    }
    return val;
}

// module.exports = msoFlex;