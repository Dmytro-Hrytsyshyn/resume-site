import { Link } from "react-router-dom";
import style from "./SidebarPages.module.css";

const SidebarPages = ({ routers }) => {
  return (
    <>
      {routers.map(({ path, name, icon }) => (
        <li className={style.nav_item} key={path}>
          <Link className={style.link} to={path}>
            <svg className={style.icon} height="25" width="25" fill="white">
              <use href={`/Image/symbol-defs.svg#${icon}`}></use>
            </svg>
            <h3>{name}</h3>
          </Link>
        </li>
      ))}
    </>
  );
};

export default SidebarPages;
