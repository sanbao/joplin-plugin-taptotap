import joplin from 'api';
import { ContentScriptType } from 'api/types';


joplin.plugins.register({
	onStart: async function() {
		// Here we register new Markdown plugin
		await joplin.contentScripts.register(
			ContentScriptType.MarkdownItPlugin,
			'taptotap',
			// './markdownItTaptotap.js'
			'./markdownIttaptotap.js'
		//	失败了，还是找插件吧，满足需求，有时间在搞，花的时间太多了，并且没有很好的文档。验证太�?
		//	2023�?03�?15�?13:09:32 搞好了，在最开始的地方 src直接替换
		);
		await joplin.contentScripts.register(
			ContentScriptType.MarkdownItPlugin,
			'taptotaprender',
			'./markdownIttaptotaprender.js'
		//	失败了，还是找插件吧，满足需求，有时间在搞，花的时间太多了，并且没有很好的文档。验证太�?
		//	2023�?03�?15�?13:09:32 搞好了，在最开始的地方 src直接替换
		);
		// console.log("my object: %o", joplin.contentScripts);
		// var plugObj = require('markdown-it-container');
		// console.log("my object %o", plugObj);
		// console.info('Hello world. Custom containers plugin started!!!');
	},
});
