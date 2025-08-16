import CertificatePage from "./page/CertificatePage/CertificatePage";
import SearchImagePage from "./page/SearchImagePage/SearchImagePage";
import ProjectsPage from "./page/SettingsPage/ProjectsPage";
import WelcomePage from "./page/WelcomePage/WelcomePage";

export const routers = [
  { path: "/", name: "About", icon: "home", element: <WelcomePage /> },
  {
    path: "/search-image",
    name: "Photos API",
    icon: "search",
    element: <SearchImagePage />,
  },
  {
    path: "/projects",
    name: "Projects",
    icon: "",
    element: <ProjectsPage />,
  },
  {
    path: "/certificate",
    name: "Certificate",
    icon: "file",
    element: <CertificatePage />,
  },
];
