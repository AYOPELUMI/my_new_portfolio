import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FeaturedProject from "../components/featuredProject";
import ProjectCard from "../components/projectCard";

gsap.registerPlugin(ScrollTrigger);


const ShowCase = ({ onLoad }) => {
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
                    imageSrc="/images/movie-image.webp"
                    altText="movie-image"
                    githubUrl="https://github.com/AYOPELUMI/Movie-App"
                    webUrl="https://ayopelumi-moive-app.vercel.app/"
                />

                <div className="project-list-wrapper overflow-hidden">
                    <ProjectCard
                        ref={project2}
                        title="Landing Page Template"
                        imageSrc="/images/hoo-bank_image.webp"
                        imageBg="bg-[#ffefdb]"
                        altText="landing-page"
                        githubUrl="https://github.com/AYOPELUMI/hoo_bank"
                        webUrl="https://ayopelumi-hoo-bank.vercel.app/"
                    />
                    <ProjectCard
                        ref={project3}
                        title="Dashboard Template"
                        imageSrc="/images/dashboard-image.webp"
                        imageBg="bg-[#ffe7eb]"
                        altText="dashboard"
                        githubUrl="https://github.com/AYOPELUMI/admin_dashboard"
                        webUrl="https://ayopelumi-admin-dashboard.vercel.app/"
                    />
                </div>
            </div>

        </section >
    )
}

export default ShowCase