import style from "./Aside.module.css";

const Aside = ({ className }) => {
  const socialInfo = [
    {
      icon: "linkedin",
      social: "https://www.linkedin.com/in/dmytro-hrytsyshyn-594786339/",
    },
    { icon: "github", social: "https://github.com/Dmytro-Hrytsyshyn" },
    { icon: "telegram", social: "https://web.telegram.org/a/#1059237562" },
  ];
  return (
    <aside className={`${style.aside}  ${className}`}>
      <h3 className={style.title}>Socials</h3>
      <ul className={style.social_list}>
        {socialInfo.map((item) => (
          <li className={style.social_item} key={item.social}>
            <a href={item.social} target="_blank">
              <svg className={style.icons} height="45" width="45">
                <use href={`./Image/symbol-defs.svg#${item.icon}`}></use>
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
