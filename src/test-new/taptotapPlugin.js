"use strict";


module.exports = function taptotap(md, options) {

    md.renderer.rules.paragraph_open = function (tokens, idx /*, options, env */) {
        var result = tokens[idx].content;
        console.log(result);
        var patt = /^\u0009/;
        if(patt.test(result)){
            result = result.replace(patt, '&nbsp;&nbsp;&nbsp;&nbsp;');
            console.log("1:"+result);
            var patt_next = /&nbsp;\u0009/;
            while(patt_next.test(result)){
                result = result.replace(patt_next,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
                console.log("next:"+result);
            }
        }
        console.log("result:"+result);
        return result;
    };

};
