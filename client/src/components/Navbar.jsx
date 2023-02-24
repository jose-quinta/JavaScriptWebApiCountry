import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div className="space-y-1 md:border-b-2 md:border-b-slate-900 bg-black opacity-75">
      <div className="flex justify-between px-10 py-5 text-white md:text-base md:container mx-auto">
        <Link to="/" className="font-bold">
          <h1 className="flex text-xl m-0 p-0 md:text-3xl">Home</h1>
        </Link>
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="px-2 text-3xl hover:bg-white hover:opacity-75 hover:text-black hover:rounded"
          >
            ≡
          </button>
        </div>
        <div
          className= {
            !isOpen
              ? "hidden mt-1 sm:flex sm:justify-end"
              : "flex"
          }
        >
          <ul
            className={
              !isOpen
                ? "flex md:mr-5 gap-x-2"
                : "flex flex-col"
            }
          >
            <li>
              <Link
                to="/"
                className="px-2 py-1 text-base hover:bg-white hover:opacity-75 hover:text-black hover:rounded md:text-xl"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/country"
                className="px-2 py-1 text-base hover:bg-white hover:opacity-75 hover:text-black hover:rounded md:text-xl"
              >
                Country
              </Link>
            </li>
            <li>
              <Link
                to="/province"
                className="px-2 py-1 text-base hover:bg-white hover:opacity-75 hover:text-black hover:rounded md:text-xl"
              >
                Province
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
