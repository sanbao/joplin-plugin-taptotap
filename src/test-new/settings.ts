import joplin from "api";
import { SettingItemType } from "api/types";
const ENABLE_TEXT_SHOW_TAPTOTAP = 'enabletextshowtabtotap';

export namespace settings {
    const SECTION = 'FeatureSettings';

    export async function register() {
        await joplin.settings.registerSection(SECTION, {
            label: "Taptotap Joplin",
            iconName: "fas fa-tools",
        });

        let PLUGIN_SETTINGS = {};

        PLUGIN_SETTINGS[ENABLE_TEXT_SHOW_TAPTOTAP] = {
            value: true,
            public: true,
            section: SECTION,
            type: SettingItemType.Bool,
            label: 'Tap键 显示 4 个空格',
            description: "使tap键真正的显示，替换成4个空格&nbsp;",
        }

        await joplin.settings.registerSettings(PLUGIN_SETTINGS);
    }
    export async function getConfig() {
        return await joplin.settings.value(ENABLE_TEXT_SHOW_TAPTOTAP);;
    }
}



