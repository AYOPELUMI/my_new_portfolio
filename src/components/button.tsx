import React from 'react'

interface ButtonProps {
    text: String;
    className: String;
    id: String;
}

const Button: React.FC<ButtonProps> = ({ text, className, id }) => {
    return (
        <a className={`${className ?? ""} cta-wrapper`}><div className='cta-button group'>
            <div className='bg-circle' />
            <p className='text'>{text}</p>
            <div className='arrow-wrapper'>
                <img src='/images/arrow-down.svg' />
            </div>
        </div></a>
    )
}

export default Button