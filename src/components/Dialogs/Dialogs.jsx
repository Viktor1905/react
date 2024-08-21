import css from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
const Dialogs = (props) => {
    return (
        <div className={css.dialogs_wrapper}>
            <div className={css.dialogs_items}>
                <div>
                    <NavLink to='/dialogs/1' className={({isActive}) => isActive ? `${css.dialog} ${css.active}` : `${css.dialog}`}>Viktor</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to='/dialogs/2' className={({isActive}) => isActive ? `${css.dialog} ${css.active}` : `${css.dialog}`}>Ekaterina</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to='/dialogs/3' className={({isActive}) => isActive ? `${css.dialog} ${css.active}` : `${css.dialog}`}>ViktorBig</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to='/dialogs/4' className={({isActive}) => isActive ? `${css.dialog} ${css.active}` : `${css.dialog}`}>Evgeniy</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to='/dialogs/5' className={({isActive}) => isActive ? `${css.dialog} ${css.active}` : `${css.dialog}`}>Aleksandr</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to='/dialogs/6' className={({isActive}) => isActive ? `${css.dialog} ${css.active}` : `${css.dialog}`}>Anonim</NavLink>
                </div>
            </div>

            <div className={css.messages}>
                <div className={css.message}>Hi</div>
                <div className={css.message}>Hello</div>
                <div className={css.message}>Hi,bro</div>
            </div>
        </div>
    )
}

export {Dialogs}
