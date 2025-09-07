import style from "./Sidebar.module.css";
import SidebarPages from "./SidebarPages/SidebarPages";

const Sidebar = ({ routers, openMenu, toggleMenu }) => {
  return (
    <div className={style.sidebar_container}>
      <button
        className={`${style.menu_btn} ${
          openMenu === true ? style.menu_btn_none : ""
        }`}
        onClick={toggleMenu}
      >
        <svg className={style.svg_icon_menu} height="35" width="35">
          <use href="/Image/symbol-defs.svg#icon-menu"></use>
        </svg>
      </button>

      <aside className={`${style.aside} ${openMenu ? style.aside_open : ""}`}>
        <nav>
          <button className={style.btn_close_menu} onClick={toggleMenu}>
            <svg height="20" width="20">
              <use href="/Image/symbol-defs.svg#icon-cross"></use>
            </svg>
          </button>

          <ul className={style.aside_list}>
            <SidebarPages routers={routers} />
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
