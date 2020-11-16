const randomNumber = (n = 10) => Math.floor(Math.random() * n) + 1;

const products = [];
const getProducts = () => {
  for (let i = 0; i < 10; i++) {
    products.push({
      id: new Date() + randomNumber(200),
      product_name: "Product" + i,
      product_image: "https://picsum.photos/200",
      product_description: "Description" + i,
      product_category: randomNumber(200) % 2 === 0 ? "Plants" : "Accessories",
      original_price: randomNumber(250),
      offer_price: randomNumber(200),
      onSale: randomNumber(200) % 3 === 0 ? true : false,
      rating: randomNumber(5),
      ratingCount: randomNumber(2000),
    });
  }

  return products;
};

export default getProducts;
