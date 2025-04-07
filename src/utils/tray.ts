import { image } from "@tauri-apps/api"
import { defaultWindowIcon } from "@tauri-apps/api/app"
import { Menu } from "@tauri-apps/api/menu"
import { TrayIcon } from "@tauri-apps/api/tray"
import { getCurrentWindow } from "@tauri-apps/api/window"
import { exit, relaunch } from "@tauri-apps/plugin-process"

export const useTray = async () =>{
    let icon : image.Image
    const defaultIcon = await defaultWindowIcon()
    if(defaultIcon === null){
        icon = await image.Image.fromPath("../assets/vue.svg")
    } else {
        icon = defaultIcon
    }
    return await TrayIcon.new(
        {
            icon: icon,
            showMenuOnLeftClick: true,
            action: async (event) => {
                if (event.type === 'Click' && event.button === 'Left' && event.buttonState === 'Down') {
                    await showMainWindow()
                }
            },
            tooltip:"Map-Show",
            menu: await Menu.new({
                items:[
                    {
                        id: 'ShowMainWindow',
                        text: '显示主窗口',
                        action: async () => {
                            await showMainWindow()
                        }
                    },
                    {
                        id: 'restart',
                        text: '重新加载',
                        action: async () => {
                            await relaunch()
                        }
                    },
                    {
                        id:'quit',
                        text:"退出",
                        action: async () => {
                            await exit(0)
                        }
                    }
                ]
            })
        }
    )
}

const showMainWindow = async () => {
    const window = getCurrentWindow()
    if (!(await window.isVisible())) {
        await window.show()
    } else {
        if (await window.isMinimized()) {
            await window.unminimize()
        }
        window.setFocus()
    }
}