import AnimatedCounter from "../components/animatedCounter";
import Button from "../components/button"
import HeroExperience from "../components/models/hero models/heroExperience"
import { words } from "../constants/constants"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1', { y: 50, opacity: 0 }, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 0.7,
            ease: "power2.inOut"
        })
    })
    return (
        <section id='hero' className='relative overflow-hidden'>
            <div className='absolute top-0 left-0 z-10'>
                <img src='/images/bg.webp' alt='background' loading="eager" />
            </div>

            <div className='hero-layout'>
                <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                    <div className='flex flex-col gap-7'>
                        <div className="hero-text">

                            <h1>Transforming
                                <span className='slide'>
                                    <span className='wrapper'>
                                        {words.map((word: any, index) => (
                                            <span key={`${word.text}-${index}`} className='flex items-center md:gap-3 gap-1 pb-2'>
                                                <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50' />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>into Scalable Solutions</h1>
                            <h1>that Drive Innovation</h1>
                        </div>

                        <p className="text-white-50 md:text-xl relative z-10 md:w-1/3">👋 Hi, I am Ayodeji, passionate about crafting interfaces that users love — whether it's a responsive web app or cross-platform mobile experience. I thrive where creativity meets code to turn ideas into seamless solutions. Let's build something amazing! ✨</p>
                        <Button className="md:w-80 md:h-16 w-60 h-12" id="work" text="See my work" />
                    </div>

                </header>
                <figure>
                    <div className="hero-3d-layout">

                        <HeroExperience />
                    </div>
                </figure>

            </div>
            <AnimatedCounter />
        </section>
    )
}

export default Hero