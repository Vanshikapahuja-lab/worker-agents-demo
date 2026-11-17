'use strict';

const minimist = require('minimist');
const { addItem, total, applyDiscount } = require('./cart');

const args = minimist(process.argv.slice(2), { default: { discount: 0 } });

let cart = [];
cart = addItem(cart, { name: 'keyboard', price: 49.99 });
cart = addItem(cart, { name: 'mouse', price: 19.5, qty: 2 });

const subtotal = total(cart);
console.log(`Subtotal: ${subtotal}`);
console.log(`After ${args.discount}% discount: ${applyDiscount(subtotal, args.discount)}`);
