module.exports = {
  default: function(context) {
    return {
      // plugin: require("./admonitionPluginRender"),
      plugin: require("./tabtotapplugin"),
      assets: function() {
        return [
          { name: 'markdownit-admonition.css' }
        ];
      },
    }
  }
}
