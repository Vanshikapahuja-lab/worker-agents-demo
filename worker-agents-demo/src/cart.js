'use strict';

const _ = require('lodash');

function round2(n) {
  return Math.round(n * 100) / 100;
}

function addItem(cart, item) {
  if (!item || typeof item.name !== 'string' || item.name.length === 0) {
    throw new Error('item needs a name');
  }
  if (typeof item.price !== 'number' || item.price < 0) {
    throw new Error('item needs a non-negative price');
  }
  const qty = item.qty === undefined ? 1 : item.qty;
  if (!Number.isInteger(qty) || qty < 1) {
    throw new Error('qty must be a positive integer');
  }
  return [...cart, { name: item.name, price: item.price, qty }];
}

function total(cart) {
  return round2(_.sumBy(cart, (line) => line.price * line.qty));
}

// Returns the price AFTER the discount has been applied.
function applyDiscount(amount, percent) {
  if (typeof percent !== 'number' || percent < 0 || percent > 100) {
    throw new Error('percent must be between 0 and 100');
  }
  return round2(amount * (percent / 100));
}

module.exports = { addItem, total, applyDiscount };
