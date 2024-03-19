import './input.css'

export function Input(props) {
    return(
        <div className="inputClass">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} onChange={props.onChange}></input>
        </div>
    )
}