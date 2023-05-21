import {
    SET_CONVERTABLE,
    SET_CONVERTED,
    SET_CONVERTED_VALUE,
    SET_CURRENCY,
    SET_LOADING_STATE,
    SET_VALUE
} from "./actionTypes";
import {AnyAction} from "redux";



const  defaultState : CurrencyState = {
    valueToConvert: 1,
    convertedValue: 1,
    convertableCurrency: "USD",
    convertedCurrency: "EUR",
    currency: {
        symbols: {

        }
    },
    isLoading: false
}

const currencyReducer = (state = defaultState,  action : AnyAction ) : CurrencyState => {
switch (action.type) {
    
    case SET_CURRENCY:

        return {
            ...state, currency : action.payload
        }

    case SET_VALUE:

        return {
            ...state, valueToConvert: action.payload
        }

    case SET_CONVERTABLE:

        return {
            ...state,
            convertableCurrency: action.payload
        }

    case SET_CONVERTED:

        return {
            ...state,
            convertedCurrency: action.payload
        }

    case SET_CONVERTED_VALUE:

        return {
            ...state,
            convertedValue: action.payload
        }

    case SET_LOADING_STATE:

        return {
            ...state,
            isLoading: action.payload
        }


    default:
        return defaultState;
}
}

export const setCurrency = (payload: ICurrency) => ({type: SET_CURRENCY, payload});
export const setValue = (payload: number) => ({type: SET_VALUE, payload});
export const setConvertable = (payload: string) => ({type: SET_CONVERTABLE, payload});
export const setConverted = (payload: string) => ({type: SET_CONVERTED, payload});
export const setConvertedValue = (payload: IConvertedValue) => ({type: SET_CONVERTED_VALUE, payload: payload.result});
export const setLoadingState  = (payload: boolean) => ({type: SET_LOADING_STATE, payload});

export default currencyReducer;