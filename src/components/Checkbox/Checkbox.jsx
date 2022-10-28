import "./Checkbox.scss";

/**
 * Crreates a labeled checkbox. Requires a name and set I/O Var/Func.
 * @checkLabel String; display name of box and BEM --flag
 * @checkValue Variable; used for reading checkbox state.
 * @onChange Function; Used to set checkValue
 */
const Checkbox = ({ checkLabel, checkValue, onChange }) => {

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