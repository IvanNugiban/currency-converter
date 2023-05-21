import React from "react";
import {useAppSelector} from "../hooks/reduxHooks";
import Loader from "./Loader";
import ConvertableInputs from "./ConvertableInputs";

interface IProps {
    text: string;
    isDisabled: boolean;
    inputCallback: (e: React.ChangeEvent) => void;
    changeCallback: (e: React.ChangeEvent) => void;
    selectDefaultValue: string;
    isLoading: boolean;
}

const ConvertableItem = (props: IProps) => {

    const currency  = useAppSelector(state => state.currency);

    return (
        <div className="w-full relative">

            <label htmlFor="currency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.text}</label>

            {(Object.keys(currency.symbols).length && !props.isLoading)  ? <ConvertableInputs selectDefaultValue={props.selectDefaultValue} changeCallback={props.changeCallback} inputCallback={props.inputCallback} isDisabled={props.isDisabled} currency={currency}/> : <Loader/>}

        </div>
    )
}

export default ConvertableItem;