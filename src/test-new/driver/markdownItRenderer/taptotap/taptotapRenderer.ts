
export function taptotapRenderer(markdownIt, _options) {
    console.info('Taptotap plugin started!');
    console.info(markdownIt)
    // 插件逻辑部分
    const defaultRender = function (tokens, idx, options, env, self) {
        console.info('Taptotap plugin started：'+111);
        return self.renderToken(tokens, idx, options, env, self);
    };
    console.info('Taptotap plugin started!222');

    markdownIt.renderer.rules.taptotap = function (tokens, idx, options, env, self) {
        // console.log(tokens, idx);
        const token = tokens[idx];
        console.info(token)
        console.info(defaultRender(tokens, idx, options, env, self))
        console.info('Taptotap plugin started：'+token.info);

        try {
            let result = token.content;
            console.info(result);
            var patt = /^\u0009/;
            if(patt.test(result)){
                result = result.replace(patt, '&nbsp;&nbsp;&nbsp;&nbsp;');
                console.info("1:"+result);
                var patt_next = /&nbsp;\u0009/;
                while(patt_next.test(result)){
                    result = result.replace(patt_next,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
                    console.info("next:"+result);
                }
            }
            console.info("result:"+result);
            return result;
        } catch (e) {

        } finally {
        }

        return '<p> Errors in taptotap </p>';
    }

}
