import axios, { AxiosError } from 'axios';
import { ChangeEvent, FormEvent, Fragment, useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  const [values, setValues] = useState({});
  const [error, setError] = useState("");
  const handleValues = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const loginUser = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/users/login", values, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        window.localStorage.setItem("auth-token", response.data.token);
        window.location.href = "/users/login";
      })
      .catch((error: AxiosError) => {
        setError(error.message);
      });
  };
  if (error) {
    alert(error);
  }
  return (
    <Fragment>
      <div className="flex min-h-[86dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md space-y-6">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="p-6 space-y-4 lg:min-w-[445px] lg:min-h-[425px]">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Welcome back</h1>
                <p className="text-black">
                  Enter your email and password to log in
                </p>
              </div>
              <form
                className="space-y-8 flex flex-col justify-between"
                onSubmit={(e) => loginUser(e)}
              >
                <div className="space-y-3">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="email"
                    placeholder="m@example.com"
                    type="email"
                    required
                    onChange={(e) => handleValues(e)}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <a
                      className="text-sm font-medium underline underline-offset-4 hover:text-black"
                      href="#"
                      rel="ugc"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="password"
                    type="password"
                    required
                    onChange={(e) => handleValues(e)}
                  />
                </div>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-10 px-4 py-2 w-full"
                  type="submit"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center mt-6">
              <p className="text-sm text-black">
                Don't have an account?
                <Link
                  to="/users/register"
                  className="ml-1 text-sm font-medium underline underline-offset-4 hover:text-black"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login