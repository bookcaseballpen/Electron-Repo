import { app, Menu } from 'electron';
import { MenuTemplate } from './menu'; // import const
import { mainWindow, createWindow } from './window';

app.on('ready', () => {
    createWindow();
	const menu = Menu.buildFromTemplate(MenuTemplate);
	Menu.setApplicationMenu(menu);
});

app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

