const products = [
  {
    name: "laptop macbook",
    price: 10000,
    user_email: "adit@gmail.com",
    category_code: "lp"
  },
  {
    name: "laptop windows",
    price: 20000,
    user_email: "hanvir@gmail.com",
    category_code: "lp"
  },
  {
    name: "hp samsung",
    price: 30000,
    user_email: "hanvir@gmail.com",
    category_code: "hp"
  }
];

class ProductRepository {
  constructor() {
      this.products = products
  }

  getAll = () => {
      return this.products
  }

  #getByEmail = (email) => {
      return products.find(product => product.user_email === email)
  }


  createProduct = (product) => {
      this.products.push(product)
  }
}

module.exports = ProductRepository;