// rafce - сніпет
import css from './SearchBar.module.css';
import { AiOutlineSearch } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { ChangeEvent, useState, FormEvent } from "react";
import { InputProps } from "./SearchBar.types";

const SearchBar: React.FC<InputProps> = ({ onSubmit }: InputProps) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast("Please fill in the search field.", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
      return;
    }

    onSubmit(query);
    setQuery("");
  };  

  return (
    <header className={css.headerStyle}>
       
  <form className={css.formStyle} onSubmit={handleSubmit}>
    <button className={css.serchBtn} type="submit"><AiOutlineSearch /></button>
    <input 
      className={css.inputStyle}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      name="search"
      onChange={handleChange}
          value={query}
    />    
    <Toaster position="top-center" reverseOrder={false} />
  </form>
 
</header>
  );
};

export default SearchBar