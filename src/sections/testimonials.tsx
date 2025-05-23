import TitleHeader from '../components/titleeader'
import { testimonials } from '../constants/constants'
import GlowCard from '../components/glowCard'
import { useEffect } from 'react';

const Testimonials = ({ onLoad }) => {

    return (
        <section id="testimonials" className='flex-center section-padding'>
            <div className='w-full h-full md:px-10 px-5'>
                <TitleHeader title="What People Say About Me" sub="Feedback highlights" />
                <div className='lg:columns-3 md:columns-2 columns-1 mt-16'>
                    {
                        testimonials.map((testimony) => (
                            <GlowCard key={testimony.mentions} card={{ review: testimony.review }}>
                                <div className=" flex gap-3">
                                    <div>
                                        <p className="font-bold">{testimony.name}</p>
                                        <p className="text-white-50">{testimony.mentions}</p>
                                    </div>
                                </div>
                            </GlowCard>
                        ))
                    }
                </div>
            </div>
        </section >
    )
}

export default Testimonials