import React from "react";
import CategoryButton from "./Elements/CategoryButton";
import { CATEGORY_LIST } from "../constant/lists";

function CategoryContainer() {
  return (
    <div className="mb-[1rem] flex w-[82vw] space-x-[1rem] overflow-x-scroll no-scrollbar">
      {CATEGORY_LIST.map((el) => (
        <CategoryButton key={el.name} {...el} />
      ))}
    </div>
  );
}

export default CategoryContainer;
