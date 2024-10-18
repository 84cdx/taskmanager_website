import { check, gear, home } from "./Icons";

const menu = [
  {
    id: 1,
    title: "Home",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "Completed",
    icon: check,
    link: "/completed",
  },
  {
    id: 3,
    title: "Settings",
    icon: gear,
    link: "/settings",
  },
];

export default menu;
