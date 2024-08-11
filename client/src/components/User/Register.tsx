import axios, { AxiosError } from "axios";
import { ChangeEvent, FormEvent, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Register = () => {
  const [values, setValues] = useState({});
  const [error, setError] = useState("");
  const handleValues = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const registerUser = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/users/register", values, {
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
      <Navbar />
      <div className="flex min-h-[86dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md space-y-6">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="p-6 space-y-4 lg:min-w-[445px] lg:min-h-[435px]">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Blog Post</h1>
                <p className="text-muted-foreground">
                  Enter details to Sign up
                </p>
              </div>
              <form className="space-y-4" onSubmit={(e) => registerUser(e)}>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="username"
                    placeholder="john-doe"
                    type="text"
                    name="username"
                    onChange={(e) => handleValues(e)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="email"
                    placeholder="m@example.com"
                    type="email"
                    name="email"
                    onChange={(e) => handleValues(e)}
                    required
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
                  </div>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="password"
                    type="password"
                    name="password"
                    onChange={(e) => handleValues(e)}
                    required
                  />
                </div>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-10 px-4 py-2 w-full"
                  type="submit"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center mt-6">
              <p className="text-sm text-muted-foreground">
                Already have an account?
                <Link
                  to="/users/login"
                  className="ml-1 text-sm font-medium underline underline-offset-4 hover:text-black"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Register;
