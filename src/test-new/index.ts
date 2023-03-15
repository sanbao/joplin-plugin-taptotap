import joplin from 'api';
import {ContentScriptType} from "../../api/types";
import {settings} from "./settings";


joplin.plugins.register({
	onStart: async function() {
		console.info('Hello world. Taptotap plugin started!');

		await settings.register();
		const ENABLE_TEXT_SHOW_TAPTOTAP = await settings.getConfig();

		// Here we register new Markdown plugin
		if (ENABLE_TEXT_SHOW_TAPTOTAP) {
			await joplin.contentScripts.register(
				ContentScriptType.MarkdownItPlugin,//对应 markdown 渲染插件； ContentScriptType.CodeMirrorPlugin, 是 markdown 编辑器插件
				'taptotap',
				// './TaptotapRenderPlugin.js',
				// './driver/markdownItRenderer/taptotap/index.js',
				// './taptotapPlugin.js'
				'./justTest.ts'
			);
		}

		// 创建Joplin插件
		const MarkdownRendererPlugin =
			{
				 onStart: async function(markdown) {
				 	 console.info(markdown+"")
				 	 console.info(markdown)
					 // Run your plugin code here
					 // 使用正则表达式，查找行首的TAB
					 let tabRegex = /^\t+/gm;
					 // 替换每个TAB为4个HTML空格
					 let newMarkdown = markdown.replace(tabRegex, "    ");
					 return newMarkdown;
				 }
			 }


// 添加插件到Joplin中
		joplin.plugins.register(MarkdownRendererPlugin);
		// console.log("my object: %o", joplin.contentScripts);
		// var plugObj = require('markdown-it-container');
		// console.log("my object %o", plugObj);
		// console.info('Hello world. Custom containers plugin started!!!');
	},
});
