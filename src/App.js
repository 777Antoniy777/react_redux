import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  state = {
    postInputValue: '',
    searchInputValue: '',
  }

  addPost = () => {
    const { onAddPost } = this.props;

    onAddPost(this.state.postInputValue);

    this.setState({
      postInputValue: '',
    });
  }

  searchPost = () => {
    const { onSearchPost } = this.props;

    onSearchPost(this.state.searchInputValue);

    this.setState({
      searchInputValue: '',
    });
  }

  onPostInputChange = (evt) => {
    const target = evt.target;

    this.setState({
      postInputValue: target.value,
    });
  }

  onSearchInputChange = (evt) => {
    const target = evt.target;

    this.setState({
      searchInputValue: target.value,
    });
  }

  render() {
    const { postsState } = this.props;

    return (
      <div>
        <div>
          <input onChange={ this.onPostInputChange } value={ this.state.postInputValue } type="text" />
          <button onClick={ this.addPost } type="button">Add post</button>
        </div>

        <div>
          <input onChange={ this.onSearchInputChange } value={ this.state.searchInputValue } type="search" />
          <button onClick={ this.searchPost } type="button">Find post</button>
        </div>

        <ul>
          { postsState.map((elem) => 

            <li key={ elem.id } >{ elem.mes }</li>
            
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    postsState: state.addPost.filter(elem => elem.mes.includes(state.searchPost)),
  }),
  dispatch => ({
    onAddPost: (postMes) => {
      const newPost = {
        id: Date.now().toString(),
        mes: postMes,
      };
      
      dispatch({
        type: 'ADD_POST',
        newPost,
      });
    },
    onSearchPost: (searchMes) => {
      dispatch({
        type: 'SEARCH_POST',
        searchMes,
      })
    },
  })
)(App);
