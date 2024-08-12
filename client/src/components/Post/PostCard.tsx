import { Fragment } from "react";
import { Post } from "../../types/post";
import { fetchImgByCategory } from "../../helperFunctions";
import { useFetchUserReaction } from "../../hooks/useFetchUserReactions";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  const imgSrc = fetchImgByCategory(post.category.type);
  const { userReactions, isLoading, error } = useFetchUserReaction({
    resourceId: post.id,
    resourceType: "post",
  });
  return (
    <Fragment>
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm w-full"
        data-v0-t="card"
      >
        {!isLoading && (
          <div className="relative">
            <img
              src={imgSrc}
              alt="Card image"
              width="400"
              height="240"
              className="rounded-t-md object-cover"
            />
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
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
                <path d="M7 10v12"></path>
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
              </svg>
              <span>
                {
                  userReactions.filter((ur) => ur.reaction.type == "Like")
                    .length
                }
              </span>
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
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
              <span>
                {
                  userReactions.filter((ur) => ur.reaction.type == "Love")
                    .length
                }
              </span>
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
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"></path>
                <line x1="9" x2="9.01" y1="9" y2="9"></line>
                <line x1="15" x2="15.01" y1="9" y2="9"></line>
              </svg>
              <span>
                {
                  userReactions.filter((ur) => ur.reaction.type == "Haha")
                    .length
                }
              </span>
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
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" x2="9.01" y1="9" y2="9"></line>
                <line x1="15" x2="15.01" y1="9" y2="9"></line>
              </svg>
              <span>
                {userReactions.filter((ur) => ur.reaction.type == "Wow").length}
              </span>
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
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
                <line x1="9" x2="9.01" y1="9" y2="9"></line>
                <line x1="15" x2="15.01" y1="9" y2="9"></line>
              </svg>
              <span>
                {userReactions.filter((ur) => ur.reaction.type == "Sad").length}
              </span>
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
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
                <path d="M7.5 8 10 9"></path>
                <path d="m14 9 2.5-1"></path>
                <path d="M9 10h0"></path>
                <path d="M15 10h0"></path>
              </svg>
              <span>
                {
                  userReactions.filter((ur) => ur.reaction.type == "Angry")
                    .length
                }
              </span>
            </div>
          </div>
        )}
        <div className="space-y-2 p-4">
          <h3 className="wrap text-2xl font-semibold leading-none tracking-tight line-clamp-1">
            {post.title}
          </h3>
          <p className="text-sm text-black line-clamp-2">{post.body}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default PostCard;
