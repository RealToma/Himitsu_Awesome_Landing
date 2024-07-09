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
    path: "#home",
  },
  {
    name: "About",
    link: "/about",
    isDisable: false,
    path: "#about",
  },
  {
    name: "Gallery",
    link: "/gallery",
    isDisable: true,
    path: "#gallery",
  },
  {
    name: "Tokenomics",
    link: "/tokenomics",
    isDisable: true,
    path: "#tokenomics",
  },
  {
    name: "Contact",
    link: "/contact",
    isDisable: true,
    path: "#contactus",
  },
];
