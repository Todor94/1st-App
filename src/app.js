/*const {Button, TextView, ui} = require('tabris');

let button = new Button({
  centerX: 0, top: 100,
  text: 'Show message'
}).appendTo(ui.contentView);

let textView = new TextView({
  centerX: 0, top: [button, 50],
  font: '24px'
}).appendTo(ui.contentView);

button.on('select', () => {
  textView.text = 'Tabris.js rocks!';
});*/
var navigationView = new tabris.NavigationView({
 left: 0, top: 0, right: 0, bottom: 0
}).appendTo(tabris.ui.contentView);
var NewsPage = require("./pages/NewsPage");
var SettingsPage = require("./pages/SettingsPage");
NewsPage.create().appendTo(navigationView);
// You can open a page by appending it to a
//navigation view.
SettingsPage.create();
// SettingsPage waits to be opened...
