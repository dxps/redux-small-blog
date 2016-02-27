import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>List of blog posts</div>
        );
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPosts }, dispatch);
}

// export default connect(null, mapDispatchToProps)(PostsIndex);
// or simpler
// export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
// or simpler and using ES6 ';./ shortcut'
export default connect(null, { fetchPosts })(PostsIndex);
