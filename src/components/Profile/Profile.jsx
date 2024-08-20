import css from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
function Profile(props){
    return (
        <div className={css.content}>
            <div>
                <img className={css.headerImg} src='https://c4.wallpaperflare.com/wallpaper/85/319/775/city-lights-night-car-nissan-skyline-gt-r-r33-mazda-rx-7-hd-wallpaper-preview.jpg'></img>
            </div>
            <div>
                <img className={css.avatar} src='https://yt3.ggpht.com/ytc/AKedOLT3yfimMX6Ak6FV4tzsZOGoUn2-nKMPjCFAYgre=s900-c-k-c0x00ffffff-no-rj'></img>
            </div>
           <MyPosts />
        </div>
    )
}
export {Profile}
