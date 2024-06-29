import { BiSearch } from "react-icons/bi";
const SearchBar = ({ isSearchBarVisible }: { isSearchBarVisible: boolean }) => {
  return (
    <form
      className={`${
        isSearchBarVisible ? "flex" : "hidden"
      } md:flex items-center flex-grow md:flex-grow-0 mx-2`}
    >
      <div className="bg-white dark:bg-dark-secondary min-w-[200px] md:min-w-[400px] max-w-full w-full px-3 rounded-full flex items-center gap-1 ">
        <button
          className="text-xl text-light-400 dark:text-dark-accent "
          type="submit"
        >
          <BiSearch />
        </button>
        <input
          type="text"
          placeholder="Search by City Name.."
          className="w-full rounded-full text-light-350 dark:text-dark-accent  p-2 placeholder:text-sm placeholder:text-light-400 placeholder:dark:text-gray-400"
          aria-label="City Search"
        />
      </div>
    </form>
  );
};

export default SearchBar;