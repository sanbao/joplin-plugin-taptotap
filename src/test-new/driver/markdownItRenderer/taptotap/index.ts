import {taptotapRenderer} from "./taptotapRenderer";

export default function (context) {
    return {
        plugin: function (markdownIt, _options) {
            const pluginId = context.pluginId;

            taptotapRenderer(markdownIt, _options);
        },
        assets: function() {
            return [
            ];
        },
    }
}
