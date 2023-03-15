//joplin-plugin-markdown-render

//joplin plugin for markdown rendering

//replace all consecutive "TAB" keys that start from line head with 4 "spaces"

const {Plugin} = require('joplin-api');

class MarkdownRenderPlugin extends Plugin {
    constructor() {
        super();
    }

    async activate() {
        Joplin.plugins.registerHook('onEditorRender', (editor, renderProps) => {
            const { text } = renderProps;
            // replace all tabs with 4 spaces
            const newText = text.replace(/^\t+/gm, '    ');
            return {text: newText};
        });
    }
}

module.exports = MarkdownRenderPlugin;
