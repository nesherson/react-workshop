import React from 'react';

import { Inventory } from '../features/inventory/Inventory.js';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.js';
// Import the Cart component here.
import { Cart } from '../features/cart/Cart.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';

// Render the Cart component below <Inventory />
export const App = (props) => {
  const { state, dispatch } = props;

  const filteredInventoryItems = state.inventory.filter((item) =>
    item.name.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchTerm searchTerm={state.searchTerm} dispatch={dispatch} />

      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Inventory
        inventory={filteredInventoryItems}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
        searchTerm={state.searchTerm}
      />

      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
};
