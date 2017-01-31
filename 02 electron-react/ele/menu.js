import {mainWindow} from './main.js';

export const MenuTemplate = [
    {
        label: 'Electron',
        submenu: [
            {
                role: 'quit'
            },
            {
                label: 'Learn More',
                click () { require('electron').shell.openExternal('http://electron.atom.io') }
            }
        ]
    },
    {
        label: 'Edit',
        submenu: [
            {
                role: 'reload'
            },
            {
                label: "google",
                click() {mainWindow.loadURL('http://google.com')}
            }
        ]
    }
]
