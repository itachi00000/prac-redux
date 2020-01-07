import React from 'react';

// actions
import {} from './js/actions/index';

// comp
import List from './components/List';
import AddForm from './components/AddForm';
// import SearchForm from './components/SearchForm';

class App2 extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <div>
          <h2>Articles</h2>
          <List />
        </div>
        <div>
          <h4>Add new article</h4>
          <AddForm />
        </div>
        >
      </>
    );
  }
}
export default App2;
