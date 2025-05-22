import { useEffect } from "react";
import { abilities } from "../constants/constants"

const FeatureCards = ({ onLoad }) => {

    return (
        <section className="w-full padding-x-lg ">
            <div className="mx-auto grid-3-cols">
                {abilities.map(({ imgPath, title, desc }: any) => (
                    <div key={title} className="card-border rounded-xl p-8 flex flex-col gap-4">
                        <div className="size-14 flex rounded-full flex-center bg-white p-2">
                            <img src={imgPath} alt={title} className="rounded-full" />
                        </div>
                        <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
                        <p className="text-white-50 text-lg">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeatureCards