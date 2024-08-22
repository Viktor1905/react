import css from './Message.module.css'
const Message = (props) => {
    return (
        <div className = {css.message}>{props.message}</div>
    )
}
export {Message}
