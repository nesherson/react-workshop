import React from 'react';

const PRODUCTS = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan='2'>{category}</th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: 'red' }}>{product.name}</span>
    );

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    let filteredProducts = this.props.products;
    if (inStockOnly) {
      filteredProducts = this.props.products.filter(
        (product) => product.stocked
      );
    }

    filteredProducts.forEach((product) => {
      if (product.name.includes(filterText)) {
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category}
            />
          );
        }
        rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
      }
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Search...'
          value={this.props.filterText}
          onChange={(e) => this.props.onFilterTextChange(e)}
        />
        <p>
          <input
            type='checkbox'
            checked={this.props.inStockOnly}
            onChange={this.props.inStockOnlyChange}
          />{' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  state = {
    filterText: '',
    inStockOnly: false,
  };

  handleFilterTextChange = (e) => {
    this.setState({ filterText: e.target.value });
  };

  handleInStockOnlyChange = (e) => {
    this.setState({ inStockOnly: !this.state.inStockOnly });
  };

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
          inStockOnly={this.inStockOnly}
          inStockOnlyChange={this.handleInStockOnlyChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

function App() {
  return (
    <div className='App'>
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}

export default App;
