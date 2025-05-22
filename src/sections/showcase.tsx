import { useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FeaturedProject from "../components/featuredProject";
import ProjectCard from "../components/projectCard";

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
            <div className="showcaselayout">
                <FeaturedProject
                    ref={project1}
                    title="Simple, Powerful, User-Friendly Web App for Movies"
                    description="An app built with Next, Typescript, Zustand, & TailwindCSS for a fast, user-friendly experience."
                    imageSrc="/images/movie-image.png"
                    altText="ryde"
                    githubUrl="#"
                    webUrl="#"
                />

                <div className="project-list-wrapper overflow-hidden">
                    <ProjectCard
                        ref={project2}
                        title="Landing Page Template"
                        imageSrc="/images/hoo-bank_image.png"
                        imageBg="bg-[#ffefdb]"
                        altText="library management"
                        githubUrl="#"
                        webUrl="#"
                    />
                    <ProjectCard
                        ref={project3}
                        title="Dashboard Showcase App"
                        imageSrc="/images/dashboard-image.png"
                        imageBg="bg-[#ffe7eb]"
                        altText="YC Directory"
                        githubUrl="#"
                        webUrl="#"
                    />
                </div>
            </div>

        </section >
    )
}

export default ShowCase