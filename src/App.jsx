import React from 'react';
import { connect } from 'react-redux';

// actions
import { addItem } from './redux/item/itemAction';

// comp
import Header from './components/Header';
import Table from './components/Table';

const mapStateToProps = state => ({
  items: state.itemsRx.items
});

const mapDispatchToProps = dispatch => ({
  addingItem: itemName => dispatch(addItem(itemName))
});

class App extends React.Component {
  componentDidMount() {}

  // handleChange(e) {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const { input } = this.state;

  //   if (!input.trim()) return;

  //   this.props.addingItem(input);
  //   this.setState({ input: '' });
  // }

  render() {
    // const { items } = this.props;
    // const { input } = this.state;

    return (
      <>
        <Header />
        <div className="container">
          <div className="card">
            <Table />
          </div>
        </div>
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
