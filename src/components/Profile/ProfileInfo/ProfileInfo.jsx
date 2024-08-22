import css from './ProfileInfo.module.css'
const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={css.headerImg} src='https://c4.wallpaperflare.com/wallpaper/85/319/775/city-lights-night-car-nissan-skyline-gt-r-r33-mazda-rx-7-hd-wallpaper-preview.jpg'></img>
            </div>
            <div className={css.block_description}>
                <img className={css.avatar} src='https://yt3.ggpht.com/ytc/AKedOLT3yfimMX6Ak6FV4tzsZOGoUn2-nKMPjCFAYgre=s900-c-k-c0x00ffffff-no-rj'></img>
            </div>
        </div>
    )
}
export {ProfileInfo}
