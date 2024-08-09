import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <a className="flex items-center justify-center" href="#" rel="ugc">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path>
          <path d="M16 8 2 22"></path>
          <path d="M17.5 15H9"></path>
        </svg>
        <span className="sr-only">Blog App</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="/users/login"
          rel="ugc"
        >
          Login
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="/posts"
          rel="ugc"
        >
          Blogs
        </Link>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
          rel="ugc"
        >
          About
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
          rel="ugc"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar