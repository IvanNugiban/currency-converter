import React, {useEffect} from "react";
import ConvertableItem from "./ConvertableItem";
import ReverseArrows from "../img/ReverseArrows.png";
import {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {setConvertable, setConverted, setConvertedValue, setValue} from "../redux/currencyReducer";
import {convertCurrency, fetchCurrency} from "../asyncActions/currency";

const ConvertSection: React.FC = () => {

    const dispatch = useAppDispatch();
    const thunkDispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const currency = useAppSelector(state => state);

     useEffect(() => {
        thunkDispatch(fetchCurrency());
     }, [])

    
    useEffect(() => {

        if (currency.valueToConvert === 0) dispatch(setConvertedValue({
            result: 0
        }));

        else thunkDispatch(convertCurrency(currency.convertedCurrency, currency.convertableCurrency, currency.valueToConvert));
    }, [currency.valueToConvert, currency.convertableCurrency, currency.convertedCurrency])

    return (
        <section className="">
            <div className="container mx-auto px-4 lg:px-28 pt-12 pb-24">
                <h1 className="text-5xl text-neutral-700 font-bold mb-4 text-center">Convert your currency</h1>
                <h2 className="text-2xl text-neutral-600  text-center">Free. Fast. Up-to-date.</h2>

                <div className="bg-white border-r-6 rounded-lg px-10 py-14  shadow-lg mt-20">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-10">
                        <ConvertableItem isLoading={false} selectDefaultValue="USD" changeCallback={(e) => dispatch(setConvertable((e.target as HTMLSelectElement).value))} inputCallback={(e) =>
                            dispatch(setValue(Number((e.target as HTMLInputElement).value)))}
                                         isDisabled={false} text="Convertible currency"/>

                        <img src={ReverseArrows} className="h-10 pt-4" alt=""/>

                        <ConvertableItem isLoading={currency.isLoading} selectDefaultValue="EUR" changeCallback={(e) => dispatch(setConverted((e.target as HTMLSelectElement).value))} inputCallback={() => undefined} isDisabled={true} text="Converted to"/>


                    </div>
                </div>
            </div>
        </section>
    )

}

export default ConvertSection;