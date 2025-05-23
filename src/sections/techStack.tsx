import { techStackIcons } from '../constants/constants'
import TitleHeader from '../components/titleeader'
import TechIcon from '../components/tech logos/techIcon'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect } from 'react'
const TechStack = ({ onLoad }) => {

    useGSAP(() => {
        gsap.fromTo(".tech-card", {
            y: 50, opacity: 0
        }, {
            y: 0, opacity: 1,
            duration: 1,
            ease: "power2.inOut",
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#skills",
                start: "top center"
            }
        })
    }, [])
    return (
        <section id="skills" className="flex-center flex-col  section-padding">
            <div className='w-full hull md:px-10 px-5'>
                <TitleHeader title="My Preferred Tech Stack" sub="My Skills So Far" />
            </div>
            <div className="tech-grid">
                {techStackIcons.map((icon) =>
                    <div key={icon.name} className=" card-border tech-card overflow-hidden group xl:rounded-full rounded-xl ">
                        <div className='tech-card-animated-bg' />
                        <div className='tech-card-content'>
                            <div className="tech-icon-wrapper">
                                <TechIcon model={icon} />
                            </div>
                            <div className="padding-x w-full">
                                <p>{icon.name}</p>
                            </div>
                        </div>
                    </div>)}
            </div>
        </section>
    )
}

export default TechStack