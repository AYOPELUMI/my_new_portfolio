import { logoIconsList } from "../constants/constants"


const LogoIcon = ({ icon }: any) => {
    return (<div className='flex-none flex-center marqueee-item '>
        <img src={icon.imgPath} alt={icon.name} />
    </div>)
}

const LogoSection = () => {
    return (
        <section className='md:my-20 my-10 relative'>
            <div className='gradient-edge'></div>
            <div className='gradient-edge'></div>
            <div className='marquee h-52'>
                <div className='marquee-box md:gap-12 gap-5'>
                    {logoIconsList.map((icon: any) => (
                        <LogoIcon key={icon.name} icon={icon} />
                    ))}
                    {logoIconsList.map((icon: any) => (
                        <LogoIcon key={icon.name} icon={icon} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LogoSection