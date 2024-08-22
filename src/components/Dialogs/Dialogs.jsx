import css from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className = {css.dialogs_wrapper}>
            <div className = {css.dialogs_items}>
                {props.dialogsElement}
            </div>

            <div className = {css.messages}>
                {props.messagesElement}
            </div>
        </div>
    )
}

export {Dialogs}
