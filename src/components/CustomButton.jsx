function CustomButton(props) {
    return <button disabled={props.disabled}>{props.name}</button>
}

export default CustomButton;