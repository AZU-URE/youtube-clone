import React from "react";

function CategoryButton({ name }) {
  return (
    <button className="hover:bg-zinc-400 text-nowrap bg-zinc-300 hover:text-white font-medium px-[1rem] py-[0.25rem] rounded-xl">
      {name}
    </button>
  );
}

export default CategoryButton;
