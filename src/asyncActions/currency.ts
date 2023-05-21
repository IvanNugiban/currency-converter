import {setConvertedValue, setCurrency, setLoadingState} from "../redux/currencyReducer";
import {AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";



export const fetchCurrency = () => {

    const key = process.env.REACT_APP_API || "";

    const myHeaders = new Headers();
    myHeaders.append("apikey", key);

    const requestOptions = {
        method: 'GET',
        headers: myHeaders
    };

    return (dispatch:  ThunkDispatch<{}, {}, AnyAction>) => {
        fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
            .then(res => res.json())
            .then((json) => dispatch(setCurrency(json)))
    }
}

export const convertCurrency = (to: string, from: string, amount: number) => {
    const key = process.env.REACT_APP_API || "";

    const myHeaders = new Headers();
    myHeaders.append("apikey", key);


    const requestOptions = {
        method: 'GET',
        headers: myHeaders
    };

    return (dispatch:  ThunkDispatch<{}, {}, AnyAction>) => {

        dispatch(setLoadingState(true));

        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
            .then(res => res.json())
            .then((json) => {
                dispatch(setLoadingState(false));
                dispatch(setConvertedValue(json))
            })
    }
}