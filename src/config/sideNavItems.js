import {
  FaBuilding,
  FaHome,
  FaHourglass,
  FaSquare,
  FaUpload,
  FaWallet,
} from "react-icons/fa";

export const sideNavItems = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/organisation",
    name: "Organisation",
    icon: <FaBuilding />,
  },
  {
    path: "/assets",
    name: "Assets",
    icon: <FaSquare />,
  },
  {
    path: "/trade",
    name: "Trade",
    icon: <FaUpload />,
  },
  {
    path: "/history",
    name: "History",
    icon: <FaHourglass />,
  },
  {
    path: "/wallet",
    name: "Wallet",
    icon: <FaWallet />,
  },
];
