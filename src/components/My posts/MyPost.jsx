import s from "./MyPost.module.css";
import Post from "./Post";
import React from "react";
import { reduxForm, Field } from "redux-form";

const addNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPostText" />
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    );
};

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
    addNewPostForm
);

const MyPost = (props) => {
    let postsElement = props.posts.map((p) => (
        <Post message={p.message} likeCounts={p.likeCounts} />
    ));

    let newPostElement = React.createRef();

    let addPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div>
            <div className={s.post}>
                <h3>My Posts</h3>
                <AddNewPostFormRedux onSubmit={addPost} />
            </div>

            <div className={s.item}>{postsElement}</div>
        </div>
    );
};

export default MyPost;
