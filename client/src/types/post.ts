import { Category } from "./category";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  category: Category;
  createdAt: Date;
}