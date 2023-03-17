module.exports = {
  default: function(context) {
    return {
      // plugin: require("./admonitionPluginRender"),
      plugin: require("./tabtotaprender"),
      assets: function() {
        return [
        ];
      },
    }
  }
}
