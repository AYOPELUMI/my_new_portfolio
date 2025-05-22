import { socialImgs } from "../constants/constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <a href="https://ayopelumi.netlify.app" target="_blank"
            rel="noopener noreferrer" >Visit Version 1</a>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a target="_blank"
              rel="noopener noreferrer" href={socialImg.link} key={index} className="icon">
              <img src={socialImg.imgPath} alt="social icon" className="size-5 aspect-square" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end hover:text-gray-600">
            © {new Date().getFullYear()} Ayodeji Pelumi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;