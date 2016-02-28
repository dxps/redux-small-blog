import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {

    static contextTypes = {
        router: PropTypes.object.isRequired
    }

    componentWillMount() {
        console.log("componentWillMount> > fetchPost");
        this.props.fetchPost(this.props.params.id);
        console.log("componentWillMount> < fetchPost");
    }

    componentWillReceiveProps(props) {
        console.log("componentWillReceiveProps> props=", props);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id).then(() => {
            this.context.router.push('/');
        });
    }

    renderPost(post) {
        if (!post || (post.id != this.props.params.id)) {
            return (<div>Loading ...</div>);
        } else {
            return (
            <div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
            );
        }
    }

    render() {
        const { post } = this.props;
        return (
            <div>
                <Link to="/" className="btn btn-primary">Back to posts</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}>Delete Post
                </button>
                {this.renderPost(post)}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {post: state.posts.post};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);