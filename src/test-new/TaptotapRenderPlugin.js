
export default function (context) {
    return {
        plugin: function taptotap_plugin(md, _options) {
            console.log(md)
            console.log("TaptotapRenderPlugin.js start")
            var min_markers = 3,
                marker_str  = '-',
                marker_char = marker_str.charCodeAt(0),
                marker_len  = marker_str.length;

            function taptotap(state, startLine, endLine, silent) {
                console.log(state)
                console.log(startLine)
                console.log(endLine)
                console.log(silent)

                return true;
            }

            md.block.ruler.before(
                'table',
                'taptotap',
                taptotap,
                {
                    alt: [
                        'paragraph',
                        'reference',
                        'blockquote',
                        'list'
                    ]
                }
            );
        },
        assets: function() {
            return [ ];
        },
    }
}
