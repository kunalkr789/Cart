import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://t3.ftcdn.net/jpg/03/01/52/70/240_F_301527093_MsrLRU3oL6lGoF5OCBNGugZ1M4MkZzXm.jpg',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://t4.ftcdn.net/jpg/01/88/79/61/240_F_188796114_Pl86RbwnZz9vnJLcSz0FtBdaPU6DdJes.jpg',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: 'https://t3.ftcdn.net/jpg/00/86/83/68/240_F_86836872_WRScBX15NPeRRWjfzRZgkuzQCZZlpSzB.jpg',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please dec the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0){
        return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }
  handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
        products: items
    })
  }
  getCartCount = () => {
    const{  products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }
  getCartTotal = () => {
    const {products} = this.state;

    let cartTotal = 0;


    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    })
    return cartTotal;
  }
  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart 
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}  
        />
        <div style={{padding: 10, fontSize: 20}}>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
