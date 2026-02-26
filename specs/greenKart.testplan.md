# GreenKart E2E Test Plan

## Application Overview

End-to-end test plan for GreenKart (rahulshettyacademy) covering core shopping and checkout flows, promo validation, search/filter behavior, and edge cases. Assume fresh state (empty cart) before each scenario.

## Test Scenarios

### 1. GreenKart E2E Tests

**Seed:** `tests/seed.spec.ts`

#### 1.1. Add Single Product to Cart

**File:** `tests/e2e/add-single-product.spec.ts`

**Steps:**
  1. Assumption: Start with a fresh browser and empty cart.
  2. Open https://rahulshettyacademy.com/seleniumPractise/#/
  3. Verify the search box is visible.
  4. In the search box type 'tom' to filter products.
  5. From filtered results, for the first visible product click 'ADD TO CART'.
  6. Click the Cart link/icon to open the cart summary.
  7. Verify the cart item count shows 1 and the added product appears in the cart.

**Expected Results:**
  - Search box is visible and accepts input.
  - Filtering by 'tom' shows matching product(s) only.
  - After clicking 'ADD TO CART', cart item count increments to 1.
  - Cart details show the correct product name and price.
  - No JS errors or unexpected modals appear during flow.

#### 1.2. Add Multiple Products and Verify Cart Totals

**File:** `tests/e2e/add-multiple-products.spec.ts`

**Steps:**
  1. Assumption: Start with a fresh browser and empty cart.
  2. Open the site and clear search input.
  3. Search for 'ca' to filter (e.g., Cauliflower).
  4. Add first two filtered products by clicking 'ADD TO CART' for each.
  5. Optionally increase quantity for one product using '+' then add again if needed.
  6. Open Cart and verify cart reflects two distinct items and their quantities.
  7. Verify the displayed total price equals sum(price_i * qty_i).

**Expected Results:**
  - Two distinct products appear in cart with the correct quantities.
  - Line-item subtotals and the overall total match expected arithmetic.
  - Cart counter (Items) displays sum of quantities.
  - Cart UI remains responsive and no duplicate entries created.

#### 1.3. Increase Quantity in Cart and Proceed to Checkout

**File:** `tests/e2e/increase-quantity-and-checkout.spec.ts`

**Steps:**
  1. Assumption: Start with a fresh browser and empty cart.
  2. Add one product to cart from the main listing.
  3. Open the cart summary.
  4. Increase the product quantity to 3 using '+' control inside cart.
  5. Verify the quantity updates immediately and line-item subtotal updates.
  6. Click 'PROCEED TO CHECKOUT' or equivalent to navigate to checkout page.
  7. Verify checkout page loads and displays order summary with same items and totals.

**Expected Results:**
  - Quantity updates to 3 and subtotal equals unit_price * 3.
  - Checkout page loads successfully and shows order summary.
  - Displayed total on checkout equals cart total from previous step.

#### 1.4. Remove Product from Cart

**File:** `tests/e2e/remove-product.spec.ts`

**Steps:**
  1. Assumption: Start fresh with empty cart.
  2. Add two different products to the cart.
  3. Open cart summary.
  4. Remove one product using the remove/delete control.
  5. Verify removed product no longer appears and cart totals update accordingly.

**Expected Results:**
  - Removed product is not listed in the cart.
  - Cart item count and total reflect removal.
  - No JavaScript errors or stale UI elements remain.

#### 1.5. Apply Valid Promo Code on Checkout

**File:** `tests/e2e/apply-valid-promo.spec.ts`

**Steps:**
  1. Assumption: Start fresh; known working promo code available (e.g., rahulshettyacademy).
  2. Add at least one product and proceed to checkout.
  3. Enter the valid promo code in the promo input and click 'Apply'.
  4. Verify success message or discount confirmation appears.
  5. Verify the final price is reduced and matches expected discounted calculation.

**Expected Results:**
  - Promo accepted message visible and discount amount displayed.
  - Final payable total equals original total minus discount.
  - Promo cannot be applied twice to stack discounts unless allowed by UI.

#### 1.6. Apply Invalid Promo Code

**File:** `tests/e2e/apply-invalid-promo.spec.ts`

**Steps:**
  1. Assumption: Start fresh and add items to cart.
  2. Proceed to checkout.
  3. Enter an invalid promo code (e.g., INVALIDCODE) and click 'Apply'.
  4. Verify a user-friendly error message appears and no discount is applied.
  5. Attempting to apply invalid code should not change totals.

**Expected Results:**
  - Clear error message shown for invalid promo code.
  - Order total remains unchanged after invalid promo attempt.
  - No UI freeze or unexpected behavior occurs.

#### 1.7. Search and Filter Behavior

**File:** `tests/e2e/search-filter.spec.ts`

**Steps:**
  1. Assumption: Start fresh and on the main product listing.
  2. Type a short substring (e.g., 'ber' or 'ca') into the search box.
  3. Verify the product list updates to show only matching items.
  4. Verify a zero-results state shows appropriate message or empty list when there is no match.
  5. Clear the search input and verify full product listing returns.

**Expected Results:**
  - List filters in real time to matching items.
  - Zero-results state is handled gracefully (no broken layout).
  - Clearing search restores full listing.

#### 1.8. Edge Case: Proceed to Checkout with Empty Cart

**File:** `tests/e2e/checkout-empty-cart.spec.ts`

**Steps:**
  1. Assumption: Start with a fresh browser and ensure cart is empty.
  2. Click Cart/icon to open cart summary.
  3. Attempt to click 'PROCEED TO CHECKOUT' or equivalent when cart is empty.
  4. Observe application behavior and note whether action is prevented or an informative message is shown.

**Expected Results:**
  - Checkout action is disabled or blocked when cart is empty.
  - A clear message or disabled state informs user to add items first.
  - No navigation to a payment or checkout page occurs when cart is empty.
