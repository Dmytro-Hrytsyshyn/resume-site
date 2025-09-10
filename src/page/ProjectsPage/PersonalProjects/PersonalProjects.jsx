import style from "../PersonalProjects/PersonalProjects.module.css";

const PersonalProjects = ({ personalProjects }) => {
  return (
    <>
      {personalProjects.map((item) => (
        <li className={style.project_item} key={item.url}>
          <a className={style.img_url} href={item.url} target="_blank">
            <img className={style.img} src={item.img} alt={item.name} />
            <div className={style.visit_site_container_content}>
              <p className={style.title_click_url}>
                Visit website
                <svg className={style.click_icon} height="55" width="55">
                  <use href="/Image/symbol-defs.svg#click"></use>
                </svg>
              </p>
            </div>
          </a>
          <div className={style.info_item}>
            <div className={style.span_marg}>
              <h4 className={style.name_proj}>{item.name}</h4>
              <p className={style.font_style}>
                <p className={style.indent}>{item.description}</p>
              </p>
            </div>
            <h4 className={style.lang_title}>Technologies:</h4>
            <p className={style.font_style}>
              <i>{item.language.join(", ")}</i>
            </p>
          </div>
        </li>
      ))}
    </>
  );
};

export default PersonalProjects;
