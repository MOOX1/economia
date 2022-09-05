import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const CurrencyMask = createNumberMask({
    prefix: '',
    suffix: '',
    includeThousandsSeparator:true,
    thousandsSeparatorSymbol:'.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2,
    intergerLimit: null,
    allowNegative: false,
    requireDecimal: false,
    allowLeadingZeroes: false
})

export default CurrencyMask

