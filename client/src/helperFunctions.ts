import progLang from "./assets/programing-languages.png";
import sdlc from "./assets/sdlc.png";
import cldComp from "./assets/cloud-computing.png";
import AI from "./assets/ai.png";
import devOps from "./assets/devops.png";
import profile1 from "./assets/profile-1.png";
import profile2 from "./assets/profile-2.png";
import profile3 from "./assets/profile-3.png";
import profile4 from "./assets/profile-4.png";
export interface userObject {
  id: number
  username: string;
  email: string;
}
const imgSrcs = [
  {
    title: "Programming Languages",
    src: progLang,
  },
  {
    title: "Software Development",
    src: sdlc,
  },
  {
    title: "Cloud Computing",
    src: cldComp,
  },
  {
    title: "Artificial Intelligence",
    src: AI,
  },
  {
    title: "DevOps",
    src: devOps,
  },
];

const profileImgs = [profile1, profile2, profile3, profile4];

export const fetchImgByCategory = (title: string) => {
  const imgSrc = imgSrcs.find((img) => img.title === title);
  if (!imgSrc) return "";
  return imgSrc.src;
};

export const fetchPostAuthorImg = () => {
  const randomImg = profileImgs.sort(() => 0.5 - Math.random()).at(0);
  if (!randomImg) return "";
  return randomImg;
};

export const formatDate = (date: Date | undefined): string => {
  let newDate = date === undefined ? Date.now().toString() : date;
  newDate = typeof newDate === "string" ? new Date(newDate) : newDate;
  return newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getSessionUser = (): userObject | undefined => {
  const user = window.localStorage.getItem("user");
  return user ? JSON.parse(user) : undefined;
};

export const isAuthenticated = () => !!localStorage.getItem("auth-token");
