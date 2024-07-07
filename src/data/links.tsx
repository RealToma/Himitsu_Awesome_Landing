import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
// import { SiGitbook } from "react-icons/si";

export const dataSocialLink = [
  {
    name: "Twitter",
    link: "https://twitter.com/",
    icon: <FaXTwitter />,
  },
  {
    name: "Telegram",
    link: "https://telegram/",
    icon: <FaTelegramPlane />,
  },
  {
    name: "Discord",
    link: "https://pinlink.io",
    icon: <FaDiscord />,
  },
  // {
  //   name: "Gitbook",
  //   link: "https://pinlink.gitbook.io/pinlink",
  //   icon: <SiGitbook />,
  // },
];

export const dataMenuLink = [
  {
    name: "Home",
    link: "/",
    isDisable: false,
    typeDapp: true,
  },
  {
    name: "About",
    link: "/about",
    isDisable: false,
    typeDapp: true,
  },
  {
    name: "Product",
    link: "/product",
    isDisable: true,
    typeDapp: true,
  },
  {
    name: "Roadmap",
    link: "/roadmap",
    isDisable: true,
    typeDapp: true,
  },
];
