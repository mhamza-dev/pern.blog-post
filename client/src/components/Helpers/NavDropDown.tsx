import { Fragment, useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { fetchPostAuthorImg } from "../../helperFunctions";

interface Props {
  user: {
    username: string;
    email: string;
  };
}

const NavDropDown = ({ user }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef(null);
  useOutsideClick({ ref: divRef, handler: () => setIsOpen(false) });
  const logoutUser = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <Fragment>
      <div className="relative inline-block text-left" ref={divRef}>
        <div
          className="flex hover:bg-gray-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={fetchPostAuthorImg()}
            alt="user profile img"
            className="w-12 h-12"
          />
          <button
            type="button"
            className="inline-flex w-full justify-center items-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900"
          >
            {user.username}
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            tabIndex={-1}
          >
            <div className="py-1" role="none">
              <div
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-0"
              >
                {user.email}
              </div>
              <div
                onClick={() => logoutUser()}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Logout
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default NavDropDown;
