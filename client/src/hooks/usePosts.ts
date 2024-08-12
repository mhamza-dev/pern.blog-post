import { useEffect, useState } from "react";
import { Post } from "../types/post";
import axios from "axios";
import { userObject } from "../helperFunctions";

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
        setIsLoading(false);
        setError(error.message);
      });
  }, [url]);
  return { posts, isLoading, error };
};

interface UserPostsProps {
  currentUser: userObject | undefined;
  token: string | null;
}

export const useUserPosts = ({ currentUser, token }: UserPostsProps) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/posts/user/${currentUser?.id}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        setPosts(response.data);
        setIsLoading(false);
      })
      .catch((error: any) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, [currentUser, token]);
  return { posts, isLoading, error };
};

export const usePost = (id: string | undefined) => {
  const [post, setPost] = useState<Post>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/posts/${id}`)
      .then((response) => {
        setPost(response.data);
        setIsLoading(false);
      })
      .catch((error: any) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, [id]);
  return { post, isLoading, error };
};
