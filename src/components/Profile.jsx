import css from './Profile.module.css'
function Profile(){
    return (

        <div className={css.content}>
            <div>
                <img src='https://steamuserimages-a.akamaihd.net/ugc/784105063666471805/4691CCBCB03064541F7909E255DC8A6B5058EE62/?imw=512&amp;imh=288&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'></img>
            </div>
            <div>
                <img className={css.avatar} src='https://yt3.ggpht.com/ytc/AKedOLT3yfimMX6Ak6FV4tzsZOGoUn2-nKMPjCFAYgre=s900-c-k-c0x00ffffff-no-rj'></img>
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={css.posts}>
                    <div className={css.item}>
                        Post1
                    </div>
                    <div className={css.item}>>
                        Post2
                    </div>
                </div>
            </div>
        </div>
    )
}
export {Profile}
