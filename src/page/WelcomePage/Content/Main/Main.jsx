import style from "./Main.module.css";

const Main = ({ className }) => {
  return (
    <main className={`${style.main} ${className}`}>
      <h2 className={style.profile}>
        <h4>✨ About Me:</h4> <br />
        <p className={style.indent}>
          I studied for over a year at the GoIT online school in the Fullstack
          Developer program. However, I found myself more passionate about
          Frontend development, where I want to continue growing professionally
          🚀.
        </p>
        <br />
        <p> I am confident in:</p>
        <br />
        <p className={style.indent}>
          🔹 HTML5 and CSS3/SCSS – building modern, adaptive, and user-friendly
          interfaces
        </p>
        <br />
        <p className={style.indent}>
          🔹 🎨 JavaScript (ES6+) – understanding core principles and
          implementing dynamic functionality ⚡
        </p>
        <br />
        <p className={style.indent}>
          🔹 Git & npm – confident use of version control and package management
          tools for efficient teamwork and project setup
        </p>
        <br />
        <p>
          Additionally, I have basic knowledge of Backend development (Node.js,
          Express, working with REST APIs), which helps me better understand the
          interaction between frontend and server-side 🔗.
        </p>
        <br />
        <p>Currently, I am focusing on improving my skills in: </p>
        <br />
        <p className={style.indent}>
          🔹 React.js ⚛️ – aiming to become a strong specialist in creating
          scalable SPAs
        </p>{" "}
        <br />
        <p className={style.indent}>
          🔹 TypeScript 🟦 – to write more structured, maintainable, and
          reliable code
        </p>
        <br />
        <p className={style.indent}>
          💡 I am motivated, eager to learn, and always looking to improve my
          skills. My goal is to become a strong Frontend Developer who writes
          clean, efficient code and delivers smooth, user-friendly experiences
          🙌.
        </p>
        <br />
        <p className={style.indent}>
          🔍 I am looking for a team where I can learn a lot, grow together with
          colleagues, and contribute effectively to projects. I value and enjoy
          teamwork, am open to new experiences, and always strive for continuous
          improvement 🤝.
        </p>
      </h2>
    </main>
  );
};

export default Main;
