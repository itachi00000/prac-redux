import React from 'react';
import { connect } from 'react-redux';

import { addArticle } from '../js/actions/index';

const mapDispatchToProps = dispatch => ({
  addingArticle: article => dispatch(addArticle(article))
});

class AddForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title } = this.state;
    const { addingArticle } = this.props;

    if (!title.trim()) return;

    addingArticle({ title });

    this.setState({ title: '' });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <button type="submit">Click</button>
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(AddForm);
