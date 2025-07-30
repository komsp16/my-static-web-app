const data = {
  products: [
    {
      id: 10,
      name: 'Strawberries for Kids',
      description: '18oz package of fresh organic strawberries',
      quantity: '1',
    },
    {
      id: 20,
      name: 'Sliced bread for family',
      description: 'Loaf of fresh sliced wheat bread',
      quantity: 1,
    },
    {
      id: 30,
      name: 'Apples for everyone',
      description: 'Bag of 7 fresh McIntosh apples',
      quantity: 1,
    },
  ],
};

export const loadProductsApi = async () => {
  return data.products;
};
