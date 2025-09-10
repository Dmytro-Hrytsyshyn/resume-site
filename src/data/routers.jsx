import CertificatePage from "../page/CertificatePage/CertificatePage";
import ProjectsPage from "../page/ProjectsPage/ProjectsPage";
import WelcomePage from "../page/WelcomePage/WelcomePage";

export const routers = [
  {
    path: "/",
    name: "About",
    icon: "home",
    element: <WelcomePage />,
    color: "#CCFFD9",
  },
  {
    path: "/projects",
    name: "Projects",
    icon: "folder-open",
    element: <ProjectsPage />,
    color: "#F0C419",
  },
  {
    path: "/certificate",
    name: "Certificate",
    icon: "file",
    element: <CertificatePage />,
    color: "",
  },
];
