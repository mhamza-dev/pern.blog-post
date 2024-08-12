import { Link } from "react-router-dom";
import PostCard from "./Post/PostCard";
import Spinner from "./Spinner";
import blogPost from "../assets/blogpost.png";
import useListCategories from "../hooks/useListCategories";
import { usePosts } from "../hooks/usePosts";
import ErrorBoundary from "./ErrorBoundary";
import usefetchSrcImg from "../hooks/useFetchImage";
import { fetchImgByCategory, formatDate } from "../helperFunctions";

const LandingPage = () => {
  const { posts, isLoading: isPostLoading, error: listPostError } = usePosts();
  const {
    categories,
    isLoading: isCategoryLoading,
    error: listCategoryError,
  } = useListCategories();
  const randomPosts = posts
    .sort(() => 0.5 - Math.random()) // Randomly shuffle the array
    .slice(0, 3);

  if (listPostError || listCategoryError) return <ErrorBoundary />;
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:gap-12 sm:grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Discover the Latest Trends in Tech
                </h1>
                <p className="max-w-[600px] text-black md:text-xl">
                  Stay up-to-date with our blog, featuring in-depth articles and
                  insights from industry experts.
                </p>
              </div>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                to="/home/posts"
                rel="ugc"
              >
                View Blog Posts
              </Link>
            </div>
            <img
              src={blogPost}
              alt="Hero"
              className="mx-auto overflow-hidden rounded-xl object-fit aspect-[4/3]"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12">
            <div>
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Featured Blog Posts
                </h2>
                <Link
                  className="text-sm font-medium text-black hover:underline underline-offset-4"
                  to="/home/posts"
                  rel="ugc"
                >
                  View All
                </Link>
              </div>
              {isPostLoading ? (
                <Spinner />
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {posts.slice(0, 9).map((post) => (
                    <Link to={`/home/posts/${post.id}`}>
                      <PostCard key={post.id} post={post} />
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="space-y-6">
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                    Blog Categories
                  </h3>
                </div>
                <div className="p-6">
                  <nav className="space-y-2">
                    {isCategoryLoading ? (
                      <Spinner />
                    ) : (
                      categories.map((category) => (
                        <Link
                          className="flex items-center justify-between text-sm font-medium hover:text-black"
                          to={`/home/posts/categories/${category.id}`}
                          rel="ugc"
                        >
                          <span>{category.type}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </Link>
                      ))
                    )}
                  </nav>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                    Popular Posts
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {randomPosts.map((post) => (
                      <Link to={`/home/posts/${post.id}`}>
                        <div className="flex gap-4" key={post.id}>
                          <img
                            src={fetchImgByCategory(post.category.type)}
                            width="80"
                            height="80"
                            alt="Blog Post"
                            className="overflow-hidden rounded-lg border"
                          />
                          <div className="space-y-1">
                            <h4 className="text-sm font-medium truncate max-w-[100px]">
                              {post.title}
                            </h4>
                            <p className="text-xs text-black">
                              {formatDate(post.createdAt)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
