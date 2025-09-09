import React from "react";

const Category = ({onCategoryChange}) => {
    const handleCategoryChange = (e) => {
      onCategoryChange(e.target.value)
    }
  return (
    <>
      <div className="">
        <div className="category "> Category</div>

        <div className="text-left ml-2 mt-6 font-[arial] text-sm">
          <div>
            <input
              type="radio"
              name="category"
              id="all"
              value="all"
              defaultChecked
              onChange={handleCategoryChange}
              className="mr-2 mb-3 accent-gray-700 cursor-pointer"
            />
            <label htmlFor="all">All</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              id="sneakers"
              value="sneakers"
              onChange={handleCategoryChange}
              className="mr-2 mb-3 accent-gray-700 cursor-pointer"
            />
            <label htmlFor="sneakers">Sneakers</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              id="flats"
              value="flats"
              onChange={handleCategoryChange}
              className="mr-2 mb-3 accent-gray-700 cursor-pointer"
            />
            <label htmlFor="flats">Flats</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              id="heels"
              value="heels"
              onChange={handleCategoryChange}
              className="mr-2 mb-3 accent-gray-700 cursor-pointer"
            />
            <label htmlFor="heels">Heels</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
