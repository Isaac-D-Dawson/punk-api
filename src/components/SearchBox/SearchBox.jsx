// import "./SearchBox.scss";

/**
 * 
 * @label String; sets displayed label for search.
 * @searchTerm Variable; I/O for user search. Accessible by user.
 * @handleInput Function; Run when input is changed. Used for interacting with searchTerm.
 */
const SearchBox = ({ label, searchTerm, handleInput }) => {

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
