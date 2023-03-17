"use strict";


module.exports = function tabtotaprender(md, options) {
    const fence = md.renderer.rules.fence

    md.renderer.rules.fence = function (tokens, idx , options, env ) {
        console.log('state tabtotaprender ------');
        console.log(tokens);
        console.log(idx);
        if(tokens[idx].type == 'fence'){
            var result = tokens[idx].content;
            console.log(result);
            var patt = /&nbsp;&nbsp;&nbsp;&nbsp;/g;
            if(patt.test(result)){
                result = result.replace(patt, '    ');
                console.log("renderer 1:"+result);
            }
        }
        tokens[idx].content = result;
        return fence(tokens,idx,options,env)
    };

};
