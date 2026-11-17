# Scenario: CI Failure Autofix

`main` has a correct `applyDiscount`. To stage the failure, create a branch called
`demo-broken` and change ONE line in `src/cart.js`.

In `applyDiscount`, replace:

```js
  return round2(amount * (1 - percent / 100));
```

with:

```js
  return round2(amount * (percent / 100));
```

The function now returns the discount amount instead of the discounted price, so the test
`applyDiscount returns the price after the discount` fails (expected 180, got 20).

Commit it to `demo-broken`, run `demo_build` on that branch, and note the execution id.
That failed run is the input for the CI Failure Autofix agent.

After a demo the agent will have pushed a fix. To re-run the demo, delete the fixed branch
(or reset `demo-broken`) and re-apply the one-line change above.
