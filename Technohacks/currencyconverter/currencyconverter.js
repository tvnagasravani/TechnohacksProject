const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.73, JPY: 110.01, AUD: 1.29, CAD: 1.25, INR: 74.12 },
    EUR: { USD: 1.18, GBP: 0.86, JPY: 129.67, AUD: 1.52, CAD: 1.47, INR: 88.08 },
    GBP: { USD: 1.37, EUR: 1.16, JPY: 151.75, AUD: 1.78, CAD: 1.73, INR: 103.43 },
    JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0066, AUD: 0.012, CAD: 0.011, INR: 0.71 },
    AUD: { USD: 0.78, EUR: 0.66, GBP: 0.56, JPY: 82.18, CAD: 0.97, INR: 56.86 },
    CAD: { USD: 0.80, EUR: 0.68, GBP: 0.58, JPY: 89.91, AUD: 1.03, INR: 57.44 },
    INR: { USD: 0.0135, EUR: 0.0113, GBP: 0.0097, JPY: 1.41, AUD: 0.018, CAD: 0.0174 }
};

function convert() {
    const amount = document.getElementById('amount').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;

    const rate = exchangeRates[from][to];
    const result = amount * rate;

    document.getElementById('result').innerText = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}