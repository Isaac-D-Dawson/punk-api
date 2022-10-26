// import "./SearchBox.scss";

const SearchBox = ({ label, searchTerm, handleInput }) => {

  // const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

  return (
    <form className="search-box">
      <label htmlFor={label} className="search-box__label">
        {label}
      </label>
      <input
        type="search"
        name={label}
        value={searchTerm}
        onInput={handleInput}
        className="search-box__input"
      />
    </form>
  );
};

export default SearchBox;
