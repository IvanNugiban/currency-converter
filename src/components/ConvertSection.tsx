import React from "react";
import ConvertableItem from "./ConvertableItem";
import ReverseArrows from "../img/ReverseArrows.png";

const ConvertSection : React.FC = () => {

return (
    <section className="bg-neutral-200">
        <div className="container mx-auto px-28 pt-12 pb-24">
            <h1 className="text-5xl text-neutral-700 font-bold mb-4 text-center">Convert your currency</h1>
            <h2 className="text-2xl text-neutral-600  text-center">Free. Fast. Up-to-date.</h2>

            <div className="bg-white border-r-6 rounded-lg p-10  shadow-lg mt-20">
                <div className="flex items-center justify-between gap-10">
                    <ConvertableItem text="Convertible currency"/>

                    <img src={ReverseArrows} className="h-10 pt-4" alt=""/>

                    <ConvertableItem text="Converted to"/>
                </div>
            </div>
        </div>
    </section>
)

}

export default ConvertSection;