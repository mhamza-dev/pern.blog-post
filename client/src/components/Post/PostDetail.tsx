import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { usePost, usePosts } from "../../hooks/usePosts";
import ErrorBoundary from "../ErrorBoundary";
import Spinner from "../Spinner";
import { formatDate } from "../../helperFunctions";
import { fetchImgByCategory, fetchPostAuthorImg } from "../../helperFunctions";
import BackButton from "../Helpers/BackButton";

const PostDetail = () => {
  const { id } = useParams();
  const { post, isLoading: isPostLoading, error: postError } = usePost(id);
  const {
    posts,
    isLoading: isPostsLoading,
    error: postsError,
  } = usePosts(post?.category.id.toString());
  if (postsError || postError) return <ErrorBoundary />;
  return (
    <Fragment>
      {isPostLoading || isPostsLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col min-h-dvh">
          <BackButton path={"/"} />
          <header className="flex justify-center bg-black text-white py-12 md:py-16 lg:py-20">
            <div className="container max-w-4xl px-4 md:px-6">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm font-medium">
                  {post?.category.type}
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  {post?.title}
                </h1>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <img
                      src={fetchPostAuthorImg()}
                      alt="Author Avatar"
                      width="32"
                      height="32"
                      className="rounded-full object-cover"
                    />
                    <span className="text-sm font-medium">
                      {post?.user.username}
                    </span>
                  </div>
                  <span className="text-sm">{formatDate(post?.createdAt)}</span>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1">
            <div className="container max-w-4xl px-4 py-12 md:px-6 md:py-16 lg:py-20">
              <article className="prose prose-gray dark:prose-invert">
                {post?.body}
              </article>
            </div>
          </main>
          <aside className="bg-muted py-12 md:py-16 lg:py-20">
            <div className="container max-w-4xl px-4 md:px-6 grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
                <div className="grid gap-6">
                  {posts.slice(0, 3).map((post) => (
                    <a
                      className="group grid grid-cols-[100px,1fr] gap-4 items-start"
                      href={`/post/${post.id}`}
                      rel="ugc"
                      key={post.id}
                    >
                      <img
                        src={fetchImgByCategory(post.category.type)}
                        alt="Related Post"
                        width="100"
                        height="75"
                        className="rounded-md object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-medium group-hover:underline">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {post.body}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Categories</h2>
                  <div className="grid gap-2">
                    <Link
                      className="inline-flex items-center gap-2 rounded-md bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                      to={`/posts/categories/${post?.category.id}`}
                      rel="ugc"
                    >
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
                        className="w-4 h-4"
                      >
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                        <circle
                          cx="7.5"
                          cy="7.5"
                          r=".5"
                          fill="currentColor"
                        ></circle>
                      </svg>
                      {post?.category.type}
                    </Link>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Share this post</h2>
                  <div className="flex items-center gap-4">
                    <a
                      className="inline-flex items-center justify-center rounded-full bg-background p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                      href="/"
                      rel="ugc"
                    >
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
                        className="w-5 h-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a
                      className="inline-flex items-center justify-center rounded-full bg-background p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                      href="/"
                      rel="ugc"
                    >
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
                        className="w-5 h-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      className="inline-flex items-center justify-center rounded-full bg-background p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                      href="/"
                      rel="ugc"
                    >
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
                        className="w-5 h-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a
                      className="inline-flex items-center justify-center rounded-full bg-background p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                      href="/"
                      rel="ugc"
                    >
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
                        className="w-5 h-5"
                      >
                        <rect
                          width="14"
                          height="14"
                          x="8"
                          y="8"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </Fragment>
  );
};

export default PostDetail;
