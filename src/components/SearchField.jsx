import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchItem } from '../redux/item/itemAction';

// const mapStateToProps = state => ({
//   items: state.itemsRx.items
// });

// const mapDispatchToProps = dispatch => ({
//   searchingItem: searchText => dispatch(searchItem(searchText))
// });

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchItem }, dispatch);
};

class SearchField extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  // handleChange(e) {
  //   const { value } = e.target;

  //   if (!value) return;
  //   this.props.searchingItem(value.toLowerCase());
  // }

  render() {
    const { value } = this.props;

    return (
      <form>
        <input
          type="search"
          name="search"
          value={value}
          onChange={e => this.props.searchItem(e.target.value)}
          placeholder="Type Name"
          className="form-control"
        />
      </form>
    );
  }
}
export default connect(null, mapDispatchToProps)(SearchField);
