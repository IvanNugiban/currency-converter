interface ICurrency {
    testValue: number;
}

type CurrencyState = {
    currency: ICurrency
}

type CurrencyAction = {
    type: string,
    payload?: any
}