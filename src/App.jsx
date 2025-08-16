import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { useState } from "react";
import { routers } from "./routers.jsx";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className={css.wrapper}>
      <Sidebar openMenu={openMenu} routers={routers} toggleMenu={toggleMenu} />
      <div
        className={`${css.content} ${
          openMenu === true ? css.content_right : ""
        }`}
      >
        <Routes>
          {routers.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

          <Route path="*" element={<h1>Сторінку не знайдено</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
