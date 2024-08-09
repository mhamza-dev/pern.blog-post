import progLang from "../assets/programing-languages.png";
import sdlc from "../assets/sdlc.png";
import cldComp from "../assets/cloud-computing.png";
import AI from "../assets/ai.png";
import devOps from "../assets/devops.png";
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

const usefetchSrcImg = (title: string) => {
  const imgSrc = imgSrcs.find((img) => img.title === title);
  if (!imgSrc) return "/placeholder.svg";
  return imgSrc.src
};

export default usefetchSrcImg;