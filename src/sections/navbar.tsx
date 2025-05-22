import { useEffect, useState, useCallback, memo, useMemo } from "react";
import { navLinks } from "../constants/constants";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(() => typeof window !== 'undefined' ? window.scrollY > 10 : false);

    // Throttle scroll handler to prevent excessive updates
    const handleScroll = useCallback(() => {
        const isScrolled = window.scrollY > 10;
        setScrolled(prev => prev !== isScrolled ? isScrolled : prev);
    }, []);

    useEffect(() => {
        // Check initial scroll position
        handleScroll();

        // Add passive scroll listener
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    // Memoize nav links to prevent unnecessary re-renders
    const renderedNavLinks = useMemo(() => (
        navLinks.map(({ link, name }) => (
            <li key={name} className="group">
                <a href={link}>
                    <span>{name}</span>
                    <span className="underline"></span>
                </a>
            </li>
        ))
    ), [navLinks]);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <a className='logo' href='#hero' aria-label="Home">
                    Ayodeji | Pelumi
                </a>

                <nav className='desktop' aria-label="Main navigation">
                    <ul>
                        {renderedNavLinks}
                    </ul>
                </nav>
                <a href="#contact" className='contact-btn group' aria-label="Contact">
                    <div className="inner text-nowrap">
                        <span>Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    );
};

export default memo(Navbar);