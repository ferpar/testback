// FastLight
const productsFn = () => {
    return [
        {
            id: "1",
            title: "Basic",
            claim: "forget about increasing prices",
            description: "Basic plan description",
            prices: [
                {
                    group: "energy",
                    label: "peak",
                    value: "10",
                    unit: "€/kwh",
                },
                {
                    group: "energy",
                    label: "valley",
                    value: "5",
                    unit: "€/kwh",
                },
                {
                    group: "energy",
                    label: "off-peak",
                    value: "8",
                    unit: "€/kwh",
                },
            ],
        },
        {
            id: "2",
            title: "Pro",
            claim: "claim pro",
            description: "Pro plan description",
            prices: [
                {
                    group: "energy",
                    label: "peak",
                    value: "20",
                    unit: "€/kwh",
                },
                {
                    group: "energy",
                    label: "valley",
                    value: "10",
                    unit: "€/kwh",
                },
                {
                    group: "energy",
                    label: "off-peak",
                    value: "15",
                    unit: "€/kwh",
                },
            ],
        },
        {
            id: "3",
            title: "Enterprise",
            claim: "claim enterprise",
            description: "Enterprise plan description",
            prices: [
                {
                    group: "energy",
                    label: "peak",
                    value: "30",
                    unit: "€/kwh",
                },
                {
                    group: "energy",
                    label: "valley",
                    value: "15",
                    unit: "€/kwh",
                },
                {
                    group: "energy",
                    label: "off-peak",
                    value: "20",
                    unit: "€/kwh",
                },
            ],
        },
    ];
};

// Vega
const assetsFn = () => {
    return [
        { id: 1, asset: "AAPL", type: "stock" },
        { id: 2, asset: "GOOGL", type: "stock" },
        { id: 3, asset: "TSLA", type: "stock" },
        { id: 4, asset: "BTC", type: "crypto" },
        { id: 5, asset: "GBP", type: "fiat" },
    ];
};

const pricesFn = () => {
    return [
        { id: 1, asset: "AAPL", price: 145.12 },
        { id: 2, asset: "GOOGL", price: 2732.23 },
        { id: 3, asset: "TSLA", price: 678.9 },
        { id: 4, asset: "BTC", price: 45000.0 },
        { id: 5, asset: "GBP", price: 1.53 },
    ];
};

const portfoliosFn = (asOf = ["2021-08-01"]) => {
    // asOf is an array of date strings
    const portfolios = {
        "2021-01-01": {
            id: 1,
            asOf: "2021-01-01",
            positions: [
                {
                    id: 1,
                    asset: "AAPL",
                    quantity: 100,
                    asOf: "2021-01-01",
                    price: 100.12,
                },
                {
                    id: 2,
                    asset: "GOOGL",
                    quantity: 50,
                    asOf: "2021-01-01",
                    price: 2232.23,
                },
                {
                    id: 3,
                    asset: "TSLA",
                    quantity: 25,
                    asOf: "2021-01-01",
                    price: 408.9,
                },
                {
                    id: 4,
                    asset: "BTC",
                    quantity: 1,
                    asOf: "2021-01-01",
                    price: 39000.0,
                },
                {
                    id: 5,
                    asset: "GBP",
                    quantity: 10000,
                    asOf: "2021-01-01",
                    price: 1.59,
                },
            ],
        },
        "2021-02-01": {
            id: 2,
            asOf: "2021-02-01",
            positions: [
                {
                    id: 1,
                    asset: "AAPL",
                    quantity: 100,
                    asOf: "2021-02-01",
                    price: 110.12,
                },
                {
                    id: 2,
                    asset: "GOOGL",
                    quantity: 50,
                    asOf: "2021-02-01",
                    price: 2332.23,
                },
                {
                    id: 3,
                    asset: "TSLA",
                    quantity: 25,
                    asOf: "2021-02-01",
                    price: 508.9,
                },
                {
                    id: 4,
                    asset: "BTC",
                    quantity: 1,
                    asOf: "2021-02-01",
                    price: 40000.0,
                },
                {
                    id: 5,
                    asset: "GBP",
                    quantity: 10000,
                    asOf: "2021-02-01",
                    price: 1.58,
                },
            ],
        },
        "2021-03-01": {
            id: 3,
            asOf: "2021-03-01",
            positions: [
                {
                    id: 1,
                    asset: "AAPL",
                    quantity: 100,
                    asOf: "2021-03-01",
                    price: 120.12,
                },
                {
                    id: 2,
                    asset: "GOOGL",
                    quantity: 50,
                    asOf: "2021-03-01",
                    price: 2432.23,
                },
                {
                    id: 3,
                    asset: "TSLA",
                    quantity: 25,
                    asOf: "2021-03-01",
                    price: 608.9,
                },
                {
                    id: 4,
                    asset: "BTC",
                    quantity: 1,
                    asOf: "2021-03-01",
                    price: 41000.0,
                },
                {
                    id: 5,
                    asset: "GBP",
                    quantity: 10000,
                    asOf: "2021-03-01",
                    price: 1.57,
                },
            ],
        },
        "2021-04-01": {
            id: 4,
            asOf: "2021-04-01",
            positions: [
                {
                    id: 1,
                    asset: "AAPL",
                    quantity: 100,
                    asOf: "2021-04-01",
                    price: 130.12,
                },
                {
                    id: 2,
                    asset: "GOOGL",
                    quantity: 50,
                    asOf: "2021-04-01",
                    price: 2532.23,
                },
                {
                    id: 3,
                    asset: "TSLA",
                    quantity: 25,
                    asOf: "2021-04-01",
                    price: 628.9,
                },
                {
                    id: 4,
                    asset: "BTC",
                    quantity: 1,
                    asOf: "2021-04-01",
                    price: 42000.0,
                },
                {
                    id: 5,
                    asset: "GBP",
                    quantity: 10000,
                    asOf: "2021-04-01",
                    price: 1.56,
                },
            ],
        },
        "2021-05-01": {
            id: 5,
            asOf: "2021-05-01",
            positions: [
                {
                    id: 1,
                    asset: "AAPL",
                    quantity: 100,
                    asOf: "2021-05-01",
                    price: 135.12,
                },
                {
                    id: 2,
                    asset: "GOOGL",
                    quantity: 50,
                    asOf: "2021-05-01",
                    price: 2632.23,
                },
                {
                    id: 3,
                    asset: "TSLA",
                    quantity: 25,
                    asOf: "2021-05-01",
                    price: 658.9,
                },
                {
                    id: 4,
                    asset: "BTC",
                    quantity: 1,
                    asOf: "2021-05-01",
                    price: 43000.0,
                },
                {
                    id: 5,
                    asset: "GBP",
                    quantity: 10000,
                    asOf: "2021-05-01",
                    price: 1.55,
                },
            ],
        },
        "2021-06-01": {
            id: 6,
            asOf: "2021-06-01",
            positions: [
                {
                    id: 1,
                    asset: "AAPL",
                    quantity: 100,
                    asOf: "2021-06-01",
                    price: 140.12,
                },
                {
                    id: 2,
                    asset: "GOOGL",
                    quantity: 50,
                    asOf: "2021-06-01",
                    price: 2682.23,
                },
                {
                    id: 3,
                    asset: "TSLA",
                    quantity: 25,
                    asOf: "2021-06-01",
                    price: 658.9,
                },
                {
                    id: 4,
                    asset: "BTC",
                    quantity: 1,
                    asOf: "2021-06-01",
                    price: 43000.0,
                },
                {
                    id: 5,
                    asset: "GBP",
                    quantity: 10000,
                    asOf: "2021-06-01",
                    price: 1.55,
                },
            ],
        },
        "2021-07-01": {
            id: 7,
            asOf: "2021-07-01",
            positions: [
                {
                    id: 1,
                    asset: "AAPL",
                    quantity: 100,
                    asOf: "2021-07-01",
                    price: 140.12,
                },
                {
                    id: 2,
                    asset: "GOOGL",
                    quantity: 50,
                    asOf: "2021-07-01",
                    price: 2702.23,
                },
                {
                    id: 3,
                    asset: "TSLA",
                    quantity: 25,
                    asOf: "2021-07-01",
                    price: 668.9,
                },
                {
                    id: 4,
                    asset: "BTC",
                    quantity: 1,
                    asOf: "2021-07-01",
                    price: 44000.0,
                },
                {
                    id: 5,
                    asset: "GBP",
                    quantity: 10000,
                    asOf: "2021-07-01",
                    price: 1.54,
                },
            ],
        },
        "2021-08-01": {
            id: 8,
            asOf: "2021-08-01",
            positions: [
                {
                    id: 1,
                    asset: "AAPL",
                    quantity: 100,
                    asOf: "2021-08-01",
                    price: 145.12,
                },
                {
                    id: 2,
                    asset: "GOOGL",
                    quantity: 50,
                    asOf: "2021-08-01",
                    price: 2732.23,
                },
                {
                    id: 3,
                    asset: "TSLA",
                    quantity: 25,
                    asOf: "2021-08-01",
                    price: 678.9,
                },
                {
                    id: 4,
                    asset: "BTC",
                    quantity: 1,
                    asOf: "2021-08-01",
                    price: 45000.0,
                },
                {
                    id: 5,
                    asset: "GBP",
                    quantity: 10000,
                    asOf: "2021-08-01",
                    price: 1.53,
                },
            ],
        },
    };
    const filteredPortfolios = asOf.map((a) => portfolios[a]);
    return filteredPortfolios;
};

module.exports = {
    productsFn,
    assetsFn,
    pricesFn,
    portfoliosFn,
};
