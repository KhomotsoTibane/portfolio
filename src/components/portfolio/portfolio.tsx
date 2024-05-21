
import "./portfolio.css";
import RealEstateApp from "../../assets/realestate.png";
import DevOverflow from "../../assets/devOverflow.png";
import DozePizzaApp from "../../assets/dozepizza.png";

const data = [
  {
    id: 1,
    image: DevOverflow,
    title: "Dev Overflow",
    github: "https://github.com/KhomotsoTibane/dev_overflow",
    demo: "https://dev-overflow-silk.vercel.app/",
    tags: "Next Js, All",
  },
  {
    id: 2,
    image: RealEstateApp,
    title: "Real Estate",
    github: "https://github.com/KhomotsoTibane/RealEstate",
    demo: "http://real-estate-pi-ruddy.vercel.app/",
    tags: "Next Js, All",
  },
  {
    id: 3,
    image: DozePizzaApp,
    title: "Doze Pizza",
    github: "https://github.com/KhomotsoTibane/dozePizza",
    demo: "https://dozepizza.vercel.app/",
    tags: "Next Js, All",
  },
];

const Portfolio = () => {
const projects = data;
  
  return (
    <section id="portfolio">
      <h6>My Recent Works</h6>
      <h2>Portfolio </h2>
      <div className="app__portfolio-container app__container">
        {projects.map(({ id, image, title, github, demo }) => (
          <article key={id}>
            <div className="app__portfolio-item">
              <div className="app__portfolio-item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="app__portfolio-item-cta">
                <a href={github} className="app__btn" target="_blank">
                  Github
                </a>
            
                  <a href={demo} className="app__btn app__btn-primary" target="_blank">
                    Live Demo
                  </a>
              
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
