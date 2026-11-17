'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { addItem, total, applyDiscount } = require('../src/cart');

test('addItem adds a line with default qty 1', () => {
  const cart = addItem([], { name: 'pen', price: 2 });
  assert.deepStrictEqual(cart, [{ name: 'pen', price: 2, qty: 1 }]);
});

test('addItem rejects a missing name', () => {
  assert.throws(() => addItem([], { price: 2 }), /needs a name/);
});

test('addItem rejects a negative price', () => {
  assert.throws(() => addItem([], { name: 'pen', price: -1 }), /non-negative/);
});

test('total sums price * qty', () => {
  let cart = [];
  cart = addItem(cart, { name: 'a', price: 10, qty: 2 });
  cart = addItem(cart, { name: 'b', price: 5.5 });
  assert.strictEqual(total(cart), 25.5);
});

test('total of an empty cart is 0', () => {
  assert.strictEqual(total([]), 0);
});

test('applyDiscount returns the price after the discount', () => {
  assert.strictEqual(applyDiscount(200, 10), 180);
  assert.strictEqual(applyDiscount(59.99, 0), 59.99);
});

test('applyDiscount rejects percentages outside 0-100', () => {
  assert.throws(() => applyDiscount(100, 101), /between 0 and 100/);
  assert.throws(() => applyDiscount(100, -5), /between 0 and 100/);
});
