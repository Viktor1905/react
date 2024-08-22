import css from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={css.profileContent}>
            <ProfileInfo />
            <MyPosts posts = {props.posts}/>
        </div>
    )
}
export {Profile}
