import React from "react";

function Store() {
  return (
    <div className="bg-[#af92db]">
    <div className="grid grid-cols-4 grid-rows-1">
      <div className="col-span-1 row-span-1">
        <div className="flex flex-col justify-center">
          <div>
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 border border-gray-300 rounded-lg"
            />
            <button className="bg-[#751CB4] text-[#D1B3C4] px-4 py-2 rounded-lg hover:bg-[#621a96] active:bg-[#3c1359] ">
              Search
            </button>
          </div>
          <div>
            <p className="text-xl font-bold">Categories</p>
            <div>
              <input type="checkbox" name="clothes" />
              <label htmlFor="clothes">Clothes</label>
            </div>
            <div>
              <input type="checkbox" name="electronics" />
              <label htmlFor="electronics">Electronics</label>
            </div>
            <div>
              <input type="checkbox" name="furniture" />
              <label htmlFor="furniture">Furniture</label>
            </div>
            <div>
              <input type="checkbox" name="shoes" />
              <label htmlFor="shoes">Shoes</label>
            </div>
            <div>
             
              <input type="checkbox" name="misc" />
              <label htmlFor="misc">Misc</label>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="col-span-3 row-span-1"></div>
    </div>
    </div>
  );
}

export default Store;
