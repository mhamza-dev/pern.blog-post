import { ChangeEvent, FormEvent, Fragment, useState } from "react";
import { useUserPosts } from "../../hooks/usePosts";
import ErrorBoundary from "../ErrorBoundary";
import Spinner from "../Spinner";
import { formatDate, getSessionUser } from "../../helperFunctions";
import FormModal from "../Helpers/FormModal";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PostTable = () => {
  const currentUser = getSessionUser();
  const token = localStorage.getItem("auth-token");
  const [postBody, setPostBody] = useState({ body: "" });
  const { posts, isLoading, error } = useUserPosts({currentUser, token});

  const handleBodyChange = (value: string) => {
    setPostBody({ ...postBody, body: value });
  };

  const makeBody = (e: ChangeEvent<HTMLInputElement>) => {
    setPostBody({ ...postBody, [e.target.name]: e.target.value });
  };

  const createPost = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/posts", postBody, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => (window.location.href = "/posts"))
      .catch((error) => console.log(error));
  };
  if (error) return <ErrorBoundary />;
  return (
    <Fragment>
      <div className="w-full px-4 mx-auto mt-2">
        <div className="rounded-t px-4 py-3 border-0 shadow-md z-10">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Posts
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <FormModal
                heading="Create New Post"
                handleSubmit={createPost}
                mainButtonTitle="Create Post"
                submitButtonTitle="Create"
              >
                <div className="space-y-3 text-start">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="title"
                    placeholder="New Programing Languages"
                    type="text"
                    name="title"
                    required
                    onChange={(e) => makeBody(e)}
                  />
                </div>
                <div className="space-y-3 text-start">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="body"
                  >
                    Body
                  </label>
                  <ReactQuill
                    value={postBody.body}
                    onChange={handleBodyChange}
                    theme="snow"
                    className="h-[25rem] w-full"
                  />
                </div>
              </FormModal>
            </div>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto max-h-[calc(100vh-200px)]">
            <table className="w-full bg-white shadow-md rounded-xl">
              <thead className="bg-white sticky top-0">
                <tr className="bg-blue-gray-100 text-gray-700">
                  <th className="py-3 px-4 text-left">Title</th>
                  <th className="py-3 px-4 text-left">Author</th>
                  <th className="py-3 px-4 text-left">Created At</th>
                  <th className="py-3 px-4 text-left"></th>
                </tr>
              </thead>
              <tbody className="text-blue-gray-900">
                {isLoading && <Spinner />}
                {posts &&
                  posts.map((post) => (
                    <tr className="border-b border-blue-gray-200" key={post.id}>
                      <td className="py-3 px-4">{post.title}</td>
                      <td className="py-3 px-4">{post.user.email}</td>
                      <td className="py-3 px-4">
                        {formatDate(post.createdAt)}
                      </td>
                      <td className="py-3 px-4">
                        <button
                          className="bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PostTable;