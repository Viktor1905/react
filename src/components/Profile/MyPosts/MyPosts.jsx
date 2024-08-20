import css from './MyPosts.module.css'
import {Post} from "./Post/Post";
function MyPosts(props){
    return (
        <div className={css.myPosts}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={css.posts}>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}
export {MyPosts}
