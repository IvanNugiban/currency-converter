import { TEST_ACTION } from "./actionTypes";



const  defaultState : CurrencyState = {
    currency: {
        testValue: 0
    }
}

const currencyReducer = (state = defaultState,  action : CurrencyAction ) : CurrencyState => {
switch (action.type) {
    
    case TEST_ACTION:
        return {
            ...state, currency: {
                testValue: state.currency.testValue + 1
            }
        }
    
    default:
        return defaultState;
}
}

export const increment = () => ({type: TEST_ACTION})

export default currencyReducer;