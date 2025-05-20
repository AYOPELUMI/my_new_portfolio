const TitleHeader = ({ title, sub }: any) => {
    return (
        <div className='flex flex-col items-center'>
            <div className='hero-badge'>
                {sub}
            </div>
            <div className='font-semibold text-3xl md:text-5xl text-center'>
                {title}
            </div>
        </div>
    )
}

export default TitleHeader