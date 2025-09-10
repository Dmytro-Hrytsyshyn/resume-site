import style from "./Aside.module.css";

import { socialInfo } from "../../../../data/socials";

const Aside = ({ className }) => {
  return (
    <aside className={`${style.aside}  ${className}`}>
      <h3 className={style.title}>Socials</h3>
      <ul className={style.social_list}>
        {socialInfo.map((item) => (
          <li className={style.social_item} key={item.social}>
            <a href={item.social} target="_blank">
              <svg className={style.icons} height="60" width="60">
                <use href={`/Image/symbol-defs.svg#${item.icon}`}></use>
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
