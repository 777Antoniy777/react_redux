import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from './actions/getPosts';

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
    const { postsState, onGetPosts } = this.props;

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

        <div>
          <button onClick={ onGetPosts } >Get posts</button>
        </div>

        <ul>
          { postsState.map((elem) => 

            <li key={ elem.id } >{ elem.body }</li>
            
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    postsState: state.posts.filter(elem => elem.body.includes(state.filteredMes)),
  }),
  dispatch => ({
    onAddPost: (postMes) => {
      const newPost = {
        id: Date.now().toString(),
        body: postMes,
      };
      
      dispatch({
        type: 'ADD_POST',
        newPost,
      });
    },
    onSearchPost: (filteredMes) => {
      dispatch({
        type: 'FILTER_POST',
        filteredMes,
      })
    },
    onGetPosts: () => {
      dispatch(getPosts())
    },
  })
)(App);
