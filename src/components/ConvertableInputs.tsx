import React, {useEffect, useRef} from 'react';
import {Simulate} from "react-dom/test-utils";
import {useAppSelector} from "../hooks/reduxHooks";
import input = Simulate.input;

interface IProps {
    currency: ICurrency;
    isDisabled: boolean;
    inputCallback: (e: React.ChangeEvent) => void;
    changeCallback: (e: React.ChangeEvent) => void;
    selectDefaultValue: string;
}

const ConvertableInputs = ({currency, isDisabled, inputCallback, changeCallback, selectDefaultValue} : IProps) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const convertedValue = useAppSelector(state => state.convertedValue);

    useEffect(() => {
        if (!isDisabled || !inputRef.current) return;

        inputRef.current.value = convertedValue.toFixed(2).toString();
    }, [convertedValue])

    return (
        <div className="flex gap-4">
            <input ref={inputRef} disabled={isDisabled}  onChange={(e) => {

                if (!inputRef.current) return;


                inputRef.current.value = e.target.value.replace(/\D/g, '');

                inputCallback(e)
            }}  id="currency"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 w-full"
                   placeholder="1"/>

            <div className="w-full">

                <select defaultValue={selectDefaultValue} onChange={(e) => changeCallback(e)} id="currency" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-5 ">
                    {Object.keys(currency.symbols).map(function(key) {
                        return (
                            <option  key={key} value={key}>{currency.symbols[key]}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    );
};

export default ConvertableInputs;