import React from "react";
// import list from "../../public/list.json";
import Cards from "./Cards";
import { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import { IconContext } from "react-icons";
import axios from "axios";

function Collection() {
  const [bookList, setBookList] = useState([]);
  const [category, setCategory] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBookList(res.data);
        setFilteredData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log("Error in getBook", error);
      }
    };
    getBook();
  }, []);

  
  const filterData = (selectedCategory) => {
    if (selectedCategory === "") {
      setFilteredData(bookList);
    } else {
      const filtered = bookList.filter(
        (item) => item.category === selectedCategory
      );
      setFilteredData(filtered);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    filterData(category);
  }, [category]);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="pt-16 items-center justify-center text-center ">
          <h1 className="pt-16 text-2xl font-semibold md:text-4xl">
            What You Want To <span className="text-teal-500">Read?</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            itaque est qui, cum, quas ut iusto consectetur magnam cupiditate
            incidunt repellat quaerat? Enim neque deleniti deserunt accusamus
            impedit aperiam eos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Excepturi itaque est qui, cum, quas ut iusto
            consectetur magnam cupiditate incidunt repellat quaerat? Enim neque
            deleniti deserunt accusamus impedit aperiam eos.
          </p>

          <div className="mt-6 flex justify-end items-center overflow-hidden">
            <IconContext.Provider value={{ color: "teal" }}>
              <FaFilter size={25} />
            </IconContext.Provider>

            <select
              className="outline-none p-4 dark:bg-slate-900 dark:text-white"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="">All</option>
              {bookList.map((item) => (
                <option key={item.id} value={item.category}>
                  {item.category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap justify-center m-2">
          {filteredData.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>

        {/* <div className="flex flex-wrap justify-center m-2">
          {bookList.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div> */}
      </div>
    </>
  );
}

export default Collection;
