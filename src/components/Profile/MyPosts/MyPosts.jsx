import css from './MyPosts.module.css'
import {Post} from "./Post/Post";
const MyPosts = (props) => {
    let posts = [
        {id: 1, message: 'Hi, my friend', likesCount: 10, liked: false},
        {id: 2, message: 'Hello, how are you?', likesCount: 5, liked: false},
        {id: 3, message: 'Nice ava', likesCount: 8, liked: false},
        {id: 4, message: 'Are you learning React?', likesCount: 12, liked: true },
    ];
    let postsElement = posts.map(post => <Post message = {post.message} likesCount = {post.likesCount} liked = {post.liked} />)
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
                {postsElement}
            </div>
        </div>
    )
}
export {MyPosts}
