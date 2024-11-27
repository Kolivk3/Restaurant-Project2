// import React, { useState, useEffect } from "react";
// import "../styles/Cart.css";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     // Load cart items from localStorage
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const groupedItems = groupCartItems(cart);
//     setCartItems(groupedItems);
//   }, []);

//   const groupCartItems = (items) => {
//     // Group items by ID and count the quantity
//     const grouped = items.reduce((acc, item) => {
//       if (!acc[item.id]) {
//         acc[item.id] = { ...item, count: 1 };
//       } else {
//         acc[item.id].count += 1;
//       }
//       return acc;
//     }, {});
//     return Object.values(grouped);
//   };

//   const handleRemoveItem = (itemId) => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const itemIndex = cart.findIndex((item) => item.id === itemId);
//     if (itemIndex > -1) {
//       cart.splice(itemIndex, 1); // Remove one instance of the item
//       localStorage.setItem("cart", JSON.stringify(cart));
//       setCartItems(groupCartItems(cart));
//     }
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.count,
//       0
//     );
//   };

//   return (
//     <div className="cart-container">
//       <h1>Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty!</p>
//       ) : (
//         <div>
//           <div className="cart-items">
//             {cartItems.map((item) => (
//               <div key={item.id} className="cart-item">
//                 <img src={item.image} alt={item.name} />
//                 <div className="item-details">
//                   <h2>{item.name}</h2>
//                   <p>Price: ${item.price}</p>
//                   <p>Quantity: {item.count}</p>
//                   <button
//                     className="remove-item-btn"
//                     onClick={() => handleRemoveItem(item.id)}
//                   >
//                     Remove 1
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="cart-summary">
//             <h2>Total: ${calculateTotal()}</h2>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React, { useState, useEffect } from "react";
import "../styles/Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const groupedItems = groupCartItems(cart);
    setCartItems(groupedItems);
  }, []);

  const groupCartItems = (items) => {
    // Group items by ID and count the quantity
    const grouped = items.reduce((acc, item) => {
      if (!acc[item.id]) {
        acc[item.id] = { ...item, count: 1 };
      } else {
        acc[item.id].count += 1;
      }
      return acc;
    }, {});
    return Object.values(grouped);
  };

  const handleRemoveItem = (itemId) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemIndex = cart.findIndex((item) => item.id === itemId);
    if (itemIndex > -1) {
      cart.splice(itemIndex, 1); // Remove one instance of the item
      localStorage.setItem("cart", JSON.stringify(cart));
      setCartItems(groupCartItems(cart));
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h2>{item.name}</h2>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.count}</p>
                  <button
                    className="remove-item-btn"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove 1
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Total: ${calculateTotal()}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
