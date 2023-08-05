import myExperience from "../../data/myExperience";


const MyExperience = () => {
  return (
    <section className="home__my-experience default-container-width">
      <h2>My Experience</h2>
      {myExperience.map((item, index) => {
        return (
          <section className="my-experience__content" key={`my-experience-${index}`}>
            <div className="my-experience__top">
              <img src={item.icon} alt="" />
              <h3 className={`my-experience__top__underline--${item.color}`}>{item.title}</h3>
              <div></div>
              <p className="mono-string">{item.tags.map(tag => `#${tag} `)}</p>
            </div>
            <div className="my-experience__bottom">
              <p className="my-experience__bottom__tag">{`<p>`}</p>
              <p className="my-experience__bottom__description">{item.description}</p>
              <p className="my-experience__bottom__tag">{`</p>`}</p>
            </div>
          </section>
        );
      })}
    </section>
  );
}


export default MyExperience;
