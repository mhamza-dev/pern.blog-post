import { Fragment } from "react";
import PostCard from "./PostCard";
import { usePosts } from "../../hooks/usePosts";
import ErrorBoundary from "../ErrorBoundary";
import Spinner from "../Spinner";
import { Link, useParams } from "react-router-dom";
import { isAuthenticated } from "../../helperFunctions";

const Posts = () => {
  const { categoryId } = useParams();
  const { posts, isLoading, error } = usePosts(categoryId);
  if (error) return <ErrorBoundary />;
  return (
    <Fragment>
      <div className="flex justify-between items-center mb-4">
        <div>
          {categoryId ? (
            <Link to="/">
              <button className="ml-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-2">
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
                  className="h-4 w-4"
                >
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
                Back
              </button>
            </Link>
          ) : null}
        </div>
        <div className="flex-1 flex justify-center">
          <h1 className="text-4xl font-semibold text-center">
            {categoryId ? posts[0]?.category.type : "All Posts"}
          </h1>
        </div>
        <div>{isAuthenticated() && ""}</div>
      </div>

      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link to={`/posts/${post.id}`}>
                <PostCard key={post.id} post={post} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Posts;
