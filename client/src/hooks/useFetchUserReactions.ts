import axios from "axios";
import { useEffect, useState } from "react";

interface UserReaction {
  resourceType: string;
  resourceId: number;
  userId: number;
  reaction: Reaction;
}

interface Reaction {
  id: number;
  type: string;
}

interface Props {
  resourceId: number;
  resourceType: string;
}

export const useFetchUserReaction = ({ resourceId, resourceType }: Props) => {
  const [userReactions, setUserReactions] = useState<UserReaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/userreactions/${resourceId}/${resourceType}`,)
      .then((response) => {console.log(response)
         setUserReactions(response.data)})
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  return { userReactions, isLoading, error };
};
