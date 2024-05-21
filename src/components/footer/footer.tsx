
import './footer.css'
import LinkdinLogo from "../../assets/linkedin.png";
import GithubLogo from "../../assets/github.png";

const footer = () => {
  return (
    <footer>
      <a href="#" className='app__footer-logo'>Khomotso Tibane</a>
      <ul className='app__footer-permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
       <div className="app__footer-socials">
       <a
        href="https://www.linkedin.com/in/khomotso-tibane-753b0186/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={LinkdinLogo} alt="My LinkedIn profile" className=""  />
      </a>
      <a href="https://github.com/KhomotsoTibane" target="_blank" rel="noreferrer">
        <img src={GithubLogo} alt="My Github profile" className=""  />
      </a>
       </div>

       <div className="app__footer-copyright">
        <small>&copy; Khomotso Tibane</small>
       </div>
    </footer>
  )
}

export default footer