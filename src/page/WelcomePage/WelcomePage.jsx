import Aside from "./Content/Aside/Aside.jsx";
import AsideSkills from "./Content/AsideSkills/AsideSkills.jsx";
import Header from "./Content/Header/Header.jsx";
import Main from "./Content/Main/Main.jsx";
import style from "./WelcomePage.module.css";

const WelcomePage = () => {
  return (
    <div className={style.container}>
      <Header className={style.header} />
      <AsideSkills className={style.aside_skills} />
      <Main className={style.main}>Lorem500</Main>
      <Aside className={style.aside}>lorem300</Aside>
    </div>
  );
};

export default WelcomePage;
