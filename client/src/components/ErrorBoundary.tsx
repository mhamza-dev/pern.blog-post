import { Fragment } from "react";
import { Link } from "react-router-dom";


const ErrorBoundary = () => {
  return (
    <Fragment>
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
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
            className="lucide lucide-triangle-alert mx-auto h-12 w-12 text-black"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
            <path d="M12 9v4"></path>
            <path d="M12 17h.01"></path>
          </svg>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Oops, something went wrong!
          </h1>
          <p className="mt-4 text-muted-foreground">
            We're sorry, but an unexpected error has occurred. Please try again
            later or contact support if the issue persists.
          </p>
          <div className="mt-6">
            <Link
              className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              to="/"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ErrorBoundary;
