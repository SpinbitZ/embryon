'use strict';
var tri = require('./organs/tricycle');
var renderer = require('./utils/renderer');
var ItemsModel = require('./models/items');
var ShellView = require('./views/shell_view');
var ItemsIntent = require('./intents/items');

window.onload = function () {
  tri(ItemsModel, ShellView, ItemsIntent);
  renderer.init();
};
