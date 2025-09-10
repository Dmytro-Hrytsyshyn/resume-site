import style from "./Header.module.css";

const Header = ({ className }) => {
  return (
    <header className={className}>
      <h1 className={style.name}>👨‍💻 Dmytro Hrytsyshyn</h1>
      <h3 className={style.profesion}>
        <i>Frontend Developer</i>
      </h3>
    </header>
  );
};

export default Header;
