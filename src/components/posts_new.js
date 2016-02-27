import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    onSubmit(props) {
        this.props.createPost(props).then( () => {
            // blog post has been created, navigate to the index
            this.context.router.push('/');
        });
    };

    render() {

        const { fields: { title, categories, content }, handleSubmit } = this.props;

        return (
            // handleSubmit is a helper provided by redux-form through reduxForm(_,_,_)(PostsNew)
            // {...object} is an ES6 object destructuring feature

            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                { /* handleSubmit helper gets the form input then it calls the action creator providing the form input */ }

                <h3>Create A New Post</h3>

                <div className={ `form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">{ title.touched ? title.error : '' }</div>
                </div>
                <div className={ `form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">{ categories.touched ? categories.error : '' }</div>
                </div>
                <div className={ `form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <textarea type="text" className="form-control" {...content} />
                    <div className="text-help">{ content.touched ? content.error : '' }</div>
                </div>

                <button type="submit" className="btn btn-small btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )

    }

}

function validate(values) {
    const errors = {};
    if (!values.title) { errors.title = 'Enter a username'; }
    if (!values.categories) { errors.categories = 'Enter categories'; }
    if (!values.content) { errors.content = 'Enter some content'; }
    return errors;
}

// reduxForm params: form-config, mapStateToProps, mapDispatchToProps
// almost the same as connect(mapStateToProps, mapDispatchToProps)

export default reduxForm({
    form: 'PostsNewForm',
    fields: [ 'title', 'categories', 'content' ],
    validate
}, null, { createPost })(PostsNew);
