import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onChangeHangler }) => (
	<input
		className={`search-box ${className}`}
		type="search"
		placeholder={placeholder}
		onChange={onChangeHangler}
	/>
);

export default SearchBox;
