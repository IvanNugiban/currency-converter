import React from "react";

interface IProps {
    text: string;
}

const ConvertableItem = (props: IProps) => {
    return (
        <div className="w-full">
         <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.text}</label>
        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-5 ">
        <option selected>Choose a country</option>
        <option value="US">United States</option>
         <option value="CA">Canada</option>
         <option value="FR">France</option>
        <option value="DE">Germany</option>
        </select>
            
        </div>
    )
}

export default ConvertableItem;