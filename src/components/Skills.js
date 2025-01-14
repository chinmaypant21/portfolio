import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={'https://cdn.iconscout.com/icon/free/png-512/react-3-1175109.png'} alt="Image" />
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <img src={'https://cdn.iconscout.com/icon/free/png-512/typescript-1-1175078.png'} alt="Image" />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={'https://images.ctfassets.net/ooa29xqb8tix/sHolxYPkMQO1gT5u6Aycp/bea05ce2b4fa806b7ede7a9d9dc16375/UXlogo.png'} alt="Image" />
                                <h5>UI/UX</h5>
                            </div>
                            <div className="item">
                                <img src={'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'} alt="Image" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={'https://cdn.iconscout.com/icon/free/png-256/python-3521655-2945099.png'} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={'https://cdn-icons-png.flaticon.com/512/518/518713.png'} alt="Image" />
                                <h5>Linux</h5>
                            </div>
                            <div className="item">
                                <img src={'https://cdn-icons-png.flaticon.com/512/1163/1163624.png'} alt="Image" />
                                <h5>Cloud</h5>
                            </div>
                            <div className="item">
                                <img src={'https://cdn-icons-png.flaticon.com/512/6783/6783360.png'} alt="Image" />
                                <h5>Security</h5>
                            </div>
                            <div className="item">
                                <img src={'https://cdn.iconscout.com/icon/free/png-512/docker-3628734-3029959.png'} alt="Image" />
                                <h5>Docker</h5>
                            </div>

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
