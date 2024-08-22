import css from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={`/dialogs/${props.id}`} className={({isActive}) => isActive ? `${css.dialog} ${css.active}` : `${css.dialog}`}>{props.name}</NavLink>
        </div>
    )
}
export {DialogItem}
