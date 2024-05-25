import { useDispatch, useSelector } from "react-redux";
import { selectFiltersName } from "../../redux/filters/selectors";
import { setFilters } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectFiltersName);

  return (
    <div className={css.container}>
      <h3>Find contacts...</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(evt) => dispatch(setFilters(evt.target.value))}
      />
    </div>
  );
};

export default SearchBox;
