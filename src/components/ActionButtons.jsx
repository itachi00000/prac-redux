import React from 'react';

import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  del: () => dispatch()
});

function ActionButtons() {
  return (
    <>
      <button type="button" className="btn btn-info">
        Read
      </button>
      <button type="button" className="btn btn-primary">
        Edit
      </button>
      <button type="button" className="btn btn-outline-danger">
        Delete
      </button>
    </>
  );
}

export default connect(null, mapDispatchToProps)(ActionButtons);
