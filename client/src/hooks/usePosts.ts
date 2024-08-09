import { useEffect, useState } from "react";
import { Post } from "../types/post";
import axios from "axios";

export const usePosts = (categoryId?: string|undefined) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const url = categoryId
    ? `http://localhost:8080/posts/category/${categoryId}`
    : "http://localhost:8080/posts";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPosts(response.data);
        setIsLoading(false);
      })
      .catch((error: any) => {
        console.log(error);
        setIsLoading(false);
        setError(error.message);
      });
  }, []);
  return { posts, isLoading, error };
};
