import React from 'react';
import { connect } from 'react-redux';

// comp
import ActionButtons from './ActionButtons';

const mapStateToProps = state => ({
  items: state.itemsRx.items
});

function Table({ items }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>
              <ActionButtons />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default connect(mapStateToProps)(Table);
