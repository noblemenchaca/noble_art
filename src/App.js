import React, { Component } from 'react';
import SideNav from './components/SideNav';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import './App.css';


class App extends Component {
  state = {
    visible: false
  }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    let { visible } = this.state;
    return (
      <SideNav visible={visible}>
        <div className="App">
          <Header onMenuClick={this.handleButtonClick} />
          <ProductListing products={productList} />
        </div>
      </SideNav>
    );
  }
}

const productList = [
  {
    id: 0,
    name: "Test Name",
    description: "Test Description",
    date: "July 2018",
    price: "$100",
    image: "http://via.placeholder.com/250x350"
  },
  {
    id: 1,
    name: "Test Name",
    description: "Test Description",
    date: "July 2018",
    price: "$100",
    image: "http://via.placeholder.com/250x350"
  }, {
    id: 2,
    name: "Test Name",
    description: "Test Description",
    date: "July 2018",
    price: "$100",
    image: "http://via.placeholder.com/250x350"
  },
  {
    id: 3,
    name: "Test Name",
    description: "Test Description",
    date: "July 2018",
    price: "$100",
    image: "http://via.placeholder.com/250x350"
  }, {
    id: 4,
    name: "Test Name",
    description: "Test Description",
    date: "July 2018",
    price: "$100",
    image: "http://via.placeholder.com/250x350"
  },
  {
    id: 5,
    name: "Test Name",
    description: "Test Description",
    date: "July 2018",
    price: "$100",
    image: "http://via.placeholder.com/250x350"
  }, {
    id: 6,
    name: "Test Name",
    description: "Test Description",
    date: "July 2018",
    price: "$100",
    image: "http://via.placeholder.com/250x350"
  }
  , {
    id: 7,
    name: "Test Name",
    description: "Test Description",
    date: "July 2018",
    price: "$100",
    image: "http://via.placeholder.com/250x350"
  }
  , {
    id: 8,
    name: "Test Name",
    description: "Test Description",
    date: "July 2018",
    price: "$100",
    image: "http://via.placeholder.com/250x350"
  }
  , {
    id: 9,
    name: "Test Name",
    description: "Test Description",
    date: "July 2018",
    price: "$100",
    image: "http://via.placeholder.com/250x350"
  }
  ,
  {
    id: 10,
    name: "Test Name",
    description: "Test Description",
    date: "July 2018",
    price: "$100",
    image: "http://via.placeholder.com/450x250"
  }
];

export default App;
