import "./Checkbox.scss";

const Checkbox = ({ checkLabel, checkValue, onChange }) => {

    // const [isChecked, setCheckState ] = useState();

    // const handleCheck = () => {
    //     setCheckState(!isChecked);
    // }

    return(
        <label className={`checkbox__wrapper checkbox__wrapper--${checkLabel}`}>
            <input
                type="checkbox"
                checked={checkValue}
                onChange={onChange}
            />
            {checkLabel}
        </label>
    )
}

export default Checkbox;