import css from './MyPosts.module.css'
import {Post} from "./Post/Post";
const MyPosts = (props) => {
    return (
        <div className={css.my_posts}>
            My posts
            <div>
                <textarea className={css.new_post}></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={css.posts}>
                <Post message='Hi, my friend' likeCount ="5"/>
                <Post message='Hello, how are you?' likeCount ="2"/>
                <Post message='Nice ava' likeCount ="10"/>
                <Post message='Are you learning React?' likeCount ="4"/>
            </div>
        </div>
    )
}
export {MyPosts}
