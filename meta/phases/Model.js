'use strict';
/*
 * ItemsModel.
 * As output, Observable of array of item data.
 * As input, ItemsIntent.
 */
var Rx = require('rx');
var channel = require('../organs/channel');

var intentMakeThing$ = new Rx.Subject();
//var intentRemoveItem$ = new Rx.Subject();
//var intentWidthChanged$ = new Rx.Subject();
//var intentColorChanged$ = new Rx.Subject();

function observe(ItemsIntent) {
    channel(ItemsIntent.addItem$, intentMakeThing$);
    //channel(ItemsIntent.removeItem$, intentRemoveItem$);
    //channel(ItemsIntent.widthChanged$, intentWidthChanged$);
    //channel(ItemsIntent.colorChanged$, intentColorChanged$);
}

function createThing() {
    return {id: Math.floor(Math.random() * 100 + 99)};
}

//function reassignId(item, index) {
//  return {id: index, color: item.color, width: item.width};
//}

var addItemMod$ = intentMakeThing$.map(function (amount) {
    var newItems = [];
    for (var i = 0; i < amount; i++) {
        newItems.push(createThing());
    }
    return function (listItems) {
        return listItems.concat(newItems).map(reassignId);
    };
});

var removeItemMod$ = intentRemoveItem$.map(function (id) {
    return function (listItems) {
        return listItems.filter(function (item) {
            return item.id !== id;
        })
            .map(reassignId);
    };
});

var colorChangedMod$ = intentColorChanged$.map(function (x) {
    return function (listItems) {
        listItems[x.id].color = x.color;
        return listItems;
    };
});

var widthChangedMod$ = intentWidthChanged$.map(function (x) {
    return function (listItems) {
        listItems[x.id].width = x.width;
        return listItems;
    };
});

var itemModifications = addItemMod$.merge(removeItemMod$).merge(colorChangedMod$).merge(widthChangedMod$);

var items$ = itemModifications.startWith(
    [{id: 0, color: 'red', width: 300}]
).scan(function (listItems, modification) {
        return modification(listItems);
    });

module.exports = {
    observe: observe,
    items$: items$
};
