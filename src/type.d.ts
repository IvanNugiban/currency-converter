interface ICurrency {
    symbols: { [key: string]: string; };
}

interface IConvertedValue {
    result: number
}

type CurrencyState = {
    valueToConvert: number,
    currency: ICurrency,
    convertableCurrency: string,
    convertedCurrency: string,
    convertedValue: number,
    isLoading: boolean
}

