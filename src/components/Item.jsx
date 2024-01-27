import { NavLink } from "react-router-dom";

function Item({ item }) {
  return (
    <NavLink
      to={item.name == "kun.uz" ? "/" : item.name}
      className="max-w-[200px] text-left px-2 flex justify-between items-center w-full  h-7 rounded-lg"
    >
      <p>{item.name}</p>
      <button
        onClick={() => {
          console.log(true);
        }}
        className="w-4 h-4 rounded-[50%] hover:bg-slate-300 transition cursor-default"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
        </svg>
      </button>
    </NavLink>
  );
}

export default Item;
