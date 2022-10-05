const sumTotal = (state) => {
  const reducer = (total, value) => total + value.price;
  const sum = state.cart.reduce(reducer, 0);

  return sum;
};

export default sumTotal;
