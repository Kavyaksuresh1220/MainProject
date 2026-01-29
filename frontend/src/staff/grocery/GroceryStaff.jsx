import React from 'react';
import LaundryHeader from '../laundry/LaundryHeader';
import Order from './components/Order';
import OrderDetails from './components/OrderDetails';
import InventoryStatus from './components/InventoryStatus';
import AddItem from './components/AddItem';

function GroceryStaff() {
  return (
    <>
      <LaundryHeader />
      <div className="container-fluid p-4 bg-light min-vh-100 overflow-auto">

        {/* Order Section with bottom margin */}
        <div className="mb-4">
          <Order />
        </div>

        {/* Order Details Section with bottom margin */}
        <div className="mb-4">
          <OrderDetails />
        </div>

        {/* Inventory Status Section with bottom margin */}
        <div className="mb-4">
          <InventoryStatus />
        </div>

        {/* Add Item Section */}
        <div className="mb-4">
          <AddItem />
        </div>

      </div>
    </>
  );
}

export default GroceryStaff;
