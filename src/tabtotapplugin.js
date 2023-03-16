"use strict";


module.exports = function admonitionPlugin(md, options) {

    md.core.ruler.after("block","tabtotab",function (state){
        console.log("state tabtotab------")
        console.log(state)
        var result = state.src;
        let rg = /\u0009/g;
        let match = result.match(rg);
        if (match && match.length) {
            result = result.replace(rg, '&nbsp;&nbsp;&nbsp;&nbsp;');
            console.log("1:" + result);
        }
         rg = /\n\t/g;
         match = result.match(rg);
        if (match && match.length) {
            result = result.replace(rg, '\n&nbsp;&nbsp;&nbsp;&nbsp;');
            console.log("2:" + result);
        }
        rg = /\t/g;
        match = result.match(rg);
        if (match && match.length) {
            result = result.replace(rg, '&nbsp;&nbsp;&nbsp;&nbsp;');
            console.log("3:" + result);
        }

        if (true) {
            result = result.replaceAll('    ', '&nbsp;&nbsp;&nbsp;&nbsp;');
            console.log("4:" + result);
        }
        state.src = result

    })
};
