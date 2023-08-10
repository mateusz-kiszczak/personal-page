import mySkills from "../../data/mySkills";

const Technologies = () => {
  return (
    <section className="about-me__technologies default-container-width">
      <h2>My skills</h2>
      <div className="technologies">
        {mySkills.map((item, index) => {
          return (
            <div className="technology" key={`${item.name}-skill-${index}`}>
              <div className="technology__logo">
                <img src={item.img} alt={`${item.name} logo.`} />
              </div>
              <div className="technology__name">
                <p>{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


export default Technologies;
