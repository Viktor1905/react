import css from './MyPosts.module.css'
import {Post} from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let postsElement = props.posts.map(post => <Post message = {post.message} likesCount = {post.likesCount} liked = {post.liked} />)
    return (
        <div className = {css.my_posts}>
            My posts
            <div>
                <div>
                    <textarea className = {css.new_post}></textarea>
                </div>
                <div>
                <button>Add post</button>
                </div>
                <div>
                <button>Remove</button>
                </div>
            </div>
            <div className={css.posts}>
                { postsElement }
            </div>
        </div>
    )
}
export {MyPosts}
