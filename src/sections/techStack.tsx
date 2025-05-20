import { techStackIcons } from '../constants/constants'
import TitleHeader from '../components/titleeader'
import React from 'react'

const TechStack = () => {
  return (
    <section id="skills" className="flex section-padding">
        <div className='w-full hull md:px-10 px-5'>
            <TitleHeader title="My Preferred Tech Stack" sub="My Skills So Far" />
        </div>
<div className="tech-grid">
    {techStackIcons.map((icon) => 
    <div key={icon.name} className=" card-border tech-card overflow-hidden group">

    </div>)}
</div>
    </section>
  )
}

export default TechStack