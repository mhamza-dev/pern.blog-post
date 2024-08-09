import { Fragment } from 'react'
import { Post } from '../../types/post';
import usefetchSrcImg from '../../hooks/useFetchImage';

interface Props {
    post: Post;
}

const PostCard = ({post}: Props) => {
    const imgSrc = usefetchSrcImg(post.category.type)
  return (
    <Fragment>
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm group"
        data-v0-t="card"
      >
        <div className="p-6">
          <img
            src={imgSrc}
            width="400"
            height="225"
            alt="Blog Post"
            className="mb-4 aspect-video w-full overflow-hidden rounded-lg object-cover transition-all group-hover:scale-105"
          />
          <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-black">
            {post.title}
          </h3>
          <p className="text-muted-foreground indent-8 truncate line-clamp-2">
            {post.body}
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default PostCard