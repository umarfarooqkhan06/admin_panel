





// import React, { useState } from 'react';
// import { 
//   Package, 
//   Info,
//   ChevronDown,
//   ChevronUp,
//   Image
// } from 'lucide-react';
// import '../styles/OrderItems.css'; // Assuming you have a CSS file for styles

// const OrderItems = ({ items, subtotal, deliveryFee, tax, totalAmount, formatCurrency }) => {
//   const [expandedItems, setExpandedItems] = useState({});
// console.log(deliveryFee,'deliveryFee')
//   // If formatCurrency isn't provided, define a default implementation
//   const formatPrice = formatCurrency || ((amount) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 2
//     }).format(amount);
//   });

//   const toggleItemDetails = (itemId) => {
//     setExpandedItems(prev => ({
//       ...prev,
//       [itemId]: !prev[itemId]
//     }));
//   };

//   // Calculate total without tax
//   const totalWithoutTax = (subtotal || 0) + (deliveryFee || 0);

//   return (
//     <div className="order-detail-card order-items">
//       <div className="card-header">
//         <h2><Package size={18} className="header-icon" /> Order Items</h2>
//         <span className="item-count">{items?.length || 0} items</span>
//       </div>

//       <div className="items-container">
//         {items?.map((item, idx) => (
//           <div key={item.id || idx} className="item-card">
//             <div className="item-main">
//               <div className="item-image-container">
//                 {item.image ? (
//                   <img src={item.image} alt={item.name} className="item-image" />
//                 ) : (
//                   <div className="item-image-placeholder">
//                     <Image size={24} />
//                   </div>
//                 )}
//               </div>

//               <div className="item-details">
//                 <div className="item-name-row">
//                   <h3 className="item-name">{item.name}</h3>

//                 </div>

//                 {item.variant && <div className="item-variant">{item.variant}</div>}

//                 {expandedItems[item.id || idx] && item.description && (
//                   <div className="item-description">{item.description}</div>
//                 )}

//                 <div className="item-price-row">
//                   <div className="item-quantity">
//                     <span className="quantity-label">Qty:</span>
//                     <div className="quantity-value">{item.quantity}</div>
//                   </div>
//                   <div className="item-price">{formatPrice(item.price)}</div>
//                 </div>
//               </div>

//               <div className="item-total">
//                 <div className="total-label">Total</div>
//                 <div className="total-value">{formatPrice(item.quantity * item.price)}</div>
//               </div>
//             </div>

//             {/* Optional customizations section */}
//             {item.customizations && expandedItems[item.id || idx] && (
//               <div className="item-customizations">
//                 <h4>Customizations:</h4>
//                 <ul>
//                   {item.customizations.map((custom, cidx) => (
//                     <li key={cidx}>{custom.name}: {custom.value}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="order-summary">
//         <div className="summary-row">
//           <span>Subtotal</span>
//           <span>{formatPrice(subtotal)}</span>
//         </div>
//         <div className="summary-row">
//           <span>Delivery Fee</span>
//           <span>{formatPrice(deliveryFee)}</span>
//         </div>

//         <div className="summary-row total">
//           <span>Total</span>
//           <span>{formatPrice(totalWithoutTax)}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderItems;




import React, { useState } from 'react';
import {
  Package,
  Info,
  ChevronDown,
  ChevronUp,
  Image
} from 'lucide-react';
import '../styles/OrderItems.css'; // Assuming you have a CSS file for styles

const OrderItems = ({ items, subtotal, deliveryFee, tax, totalAmount, formatCurrency }) => {
  const [expandedItems, setExpandedItems] = useState({});
  console.log(deliveryFee, 'deliveryFee')

  // If formatCurrency isn't provided, define a default implementation
  const formatPrice = formatCurrency || ((amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(amount);
  });

  const toggleItemDetails = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  // Calculate total without tax
  const totalWithoutTax = (subtotal || 0) + (deliveryFee || 0);

  return (
    <div className="order-detail-card order-items">
      <div className="card-header">
        <h2><Package size={18} className="header-icon" /> Order Items</h2>
        <span className="item-count">{items?.length || 0} items</span>
      </div>

      <div className="items-container">
        {items?.map((item, idx) => (
          <div key={item.id || idx} className="item-card">
            <div className="item-main">
              <div className="item-image-container">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="item-image" />
                ) : (
                  <div className="item-image-placeholder">
                    <Image size={24} />
                  </div>
                )}
              </div>

              <div className="item-details">
                <div className="item-name-row">
                  <h3 className="item-name">{item.name}</h3>

                </div>

                {item.variant && <div className="item-variant">{item.variant}</div>}



                <div className="item-price-row">
                  <div className="item-quantity-container">
                    <div className="item-quantity">
                      <span className="quantity-label">Qty:</span>
                      <div className="quantity-value">{item.quantity}</div>
                    </div>
                    {item.weight && (
                      <div className="item-weight">
                        {/* Commented meat cut section preserved as in your code */}
                        {/* {item.meatCut && (
      <span>
        {['jc-jatka', 'jc jatka', 'jc jatka'].includes(item.meatCut.toLowerCase())
          ? 'Desi cut'
          : [item.meatCut]}
      </span>
    )} */}
                        <span className="quantity-label">weight: </span>
                        <span className="quantity-label">
                          {(() => {
                            // If weight is not a string, convert it to string
                            const weightStr = String(item.weight).trim();

                            // Check if the weight already ends with 'g' or 'gram' (case insensitive)
                            if (/g(?:ram)?$/i.test(weightStr)) {
                              return weightStr; // Return as is if it already has 'g' or 'gram'
                            } else if (/^\d+(\.\d+)?$/.test(weightStr)) {
                              return `${weightStr}g`; // Add 'g' if it's just a number
                            } else {
                              return weightStr; // Return as is for any other format
                            }
                          })()}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="item-price">{formatPrice(item.price)}</div>
                </div>
              </div>

              <div className="item-total">
                <div className="total-label">Total</div>
                <div className="total-value">{formatPrice(item.quantity * item.price)}</div>
              </div>
            </div>

            {/* Optional customizations section */}
            {item.customizations && expandedItems[item.id || idx] && (
              <div className="item-customizations">
                <h4>Customizations:</h4>
                <ul>
                  {item.customizations.map((custom, cidx) => (
                    <li key={cidx}>{custom.name}: {custom.value}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="order-summary">
        <div className="summary-row">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="summary-row">
          <span>Delivery Fee</span>
          <span>{formatPrice(deliveryFee)}</span>
        </div>

        <div className="summary-row total">
          <span>Total</span>
          <span>{formatPrice(totalWithoutTax)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderItems;