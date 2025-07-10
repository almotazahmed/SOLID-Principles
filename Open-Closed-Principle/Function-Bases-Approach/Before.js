// ❌ BAD: Violates OCP
const badDiscountCalculator = (price, customerType) => {
  if (customerType === 'regular') {
    return price;
  } else if (customerType === 'premium') {
    return price * 0.9;
  } else if (customerType === 'vip') {
    return price * 0.8;
  }
  // Adding new customer type requires modifying this function
};