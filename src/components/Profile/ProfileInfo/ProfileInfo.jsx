import css from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={css.headerImg} src={require('./assets/img/header.jpg')}></img>
            </div>
            <div className={css.block_description}>
                <img className={css.avatar} src='https://yt3.ggpht.com/ytc/AKedOLT3yfimMX6Ak6FV4tzsZOGoUn2-nKMPjCFAYgre=s900-c-k-c0x00ffffff-no-rj'></img>
            </div>
        </div>
    )
}
export {ProfileInfo}
