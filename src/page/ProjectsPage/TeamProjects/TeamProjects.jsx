const TeamProjects = ({ teamProjects }) => {
  return (
    <li>
      {teamProjects.map((item) => (
        <ul key={item.url}>
          <li>
            <a href={item.url} target="_blank">
              <img src={item.img} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>
            </a>
          </li>
        </ul>
      ))}
    </li>
  );
};

export default TeamProjects;
