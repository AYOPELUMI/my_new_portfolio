import { useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


const ShowCase = () => {
    const sectionRef = useRef(null);
    const project1 = useRef(null);
    const project2 = useRef(null);
    const project3 = useRef(null);


    useGSAP(() => {
        const projects = [project1.current, project2.current, project3.current];
        projects.forEach((card, index) => {
            gsap.fromTo(card, {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                delay: 0.2 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=100"
                }
            })
        })
        gsap.fromTo(sectionRef.current, {
            opacity: 0,
        }, { opacity: 1, duration: 1.5 })
    }, [])
    return (
        <section ref={sectionRef} className="app-showcase" id="work">
            <div className="w-full">
                <div className="showcaselayout">
                    <div ref={project1} className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="ryde" />
                        </div>
                        <div className="text-content">
                            <h2>
                                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                                called Ryde
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                An app built with React Native, Expo, & TailwindCSS for a fast,
                                user-friendly experience.
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div ref={project2} className="project">
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="library management" />
                            </div>
                            <h2>Library Management Platform</h2>
                        </div>
                        <div ref={project3} className="project">
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/project3.png" alt="YC Directory" />
                            </div>
                            <h2>YC Directory - A Startup Showcase App</h2>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default ShowCase