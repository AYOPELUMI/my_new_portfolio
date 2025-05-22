import React, { useCallback } from 'react';

interface ButtonProps {
    text: string;
    className?: string;
    id: string;
}

const Button: React.FC<ButtonProps> = ({ text, className, id }) => {
    const handleClick = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        const target = document.getElementById(id);

        if (target) {
            // Use requestAnimationFrame to avoid layout thrashing
            requestAnimationFrame(() => {
                const offset = window.innerHeight * 0.15;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: "smooth" });
            });
        }
    }, [id]); // Memoize based on targetId

    return (
        <a
            onClick={handleClick}
            className={`${className ?? ""} cta-wrapper`}
            aria-label={`Scroll to ${id}`}
        >
            <div className='cta-button group'>
                <div className='bg-circle' />
                <p className='text'>{text}</p>
                <div className='arrow-wrapper'>
                    <img src='/images/arrow-down.svg' alt="Down arrow" />
                </div>
            </div>
        </a>
    );
};

export default Button;