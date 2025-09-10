import style from "./ListProjects.module.css";
import { projectList } from "../../data/projects.jsx";
import PersonalProjects from "./PersonalProjects/PersonalProjects.jsx";
import TeamProjects from "./TeamProjects/TeamProjects.jsx";

const ListProjects = () => {
  const personalProjects = [];
  const teamProjects = [];

  projectList.forEach((project) => {
    if (project.type === "personal") personalProjects.push(project);
    else if (project.type === "team") teamProjects.push(project);
  });

  return (
    <div className={style.projects_container}>
      <h3 className={style.proj_title}>Personal projects</h3>
      <ul className={style.projects_list}>
        <PersonalProjects personalProjects={personalProjects} />
      </ul>

      <h3 className={style.proj_title}>Teams projects</h3>
      <ul className={style.projects_list}>
        <TeamProjects teamProjects={teamProjects} />
      </ul>
    </div>
  );
};

export default ListProjects;
