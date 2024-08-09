import { useEffect, useState } from "react";
import { Category } from "../types/category";
import axios from "axios";

const useListCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    axios
      .get("http://localhost:8080/categories")
      .then((response) => {
        setCategories(response.data);
        setIsLoading(false);
      })
      .catch((error: any) => {
        console.log(error);
        setIsLoading(false);
        setError(error.message);
      });
  }, []);
  return { categories, isLoading, error };
};

export default useListCategories;
