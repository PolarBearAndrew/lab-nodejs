const len = 762572;
// const arr = [];
const obj = {
  arr: [],
  promise: [],
};

console.time('prepare');
for (let i = 0; i < len; i += 1) {
  obj.promise.push(
    new Promise((r) => {
      obj.arr.push(r);
    })
  );
}
console.timeEnd('prepare');

(async () => {
  process.nextTick(() => {
    for (let i = 0; i < len; i += 1) {
      obj.arr[i]({
        benchmarkMetrics: {
          netSalesAmount: {
            amount: '0',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          grossSalesAmount: {
            amount: '0',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          grossSalesUnit: 0,
          grossSalesUnitFromBundle: 0,
          grossSalesAmountFromBundle: {
            amount: '0',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          netSalesUnit: 0,
          totalOrders: 0,
          __typename: 'Metrics',
        },
        last180DaysMetrics: {
          netSalesAmount: {
            amount: '422.5',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          grossSalesAmount: {
            amount: '422.5',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          grossSalesUnit: 13,
          grossSalesUnitFromBundle: 0,
          grossSalesAmountFromBundle: {
            amount: '0',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          netSalesUnit: 13,
          totalOrders: 12,
          __typename: 'Metrics',
        },
        last30DaysMetrics: {
          netSalesAmount: {
            amount: '32.5',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          grossSalesAmount: {
            amount: '32.5',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          grossSalesUnit: 1,
          grossSalesUnitFromBundle: 0,
          grossSalesAmountFromBundle: {
            amount: '0',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          netSalesUnit: 1,
          totalOrders: 1,
          __typename: 'Metrics',
        },
        last365DaysMetrics: {
          netSalesAmount: {
            amount: '780',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          grossSalesAmount: {
            amount: '780',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          grossSalesUnit: 24,
          grossSalesUnitFromBundle: 0,
          grossSalesAmountFromBundle: {
            amount: '0',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          netSalesUnit: 24,
          totalOrders: 22,
          __typename: 'Metrics',
        },
        last60DaysMetrics: {
          netSalesAmount: {
            amount: '130',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          grossSalesAmount: {
            amount: '130',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          grossSalesUnit: 4,
          grossSalesUnitFromBundle: 0,
          grossSalesAmountFromBundle: {
            amount: '0',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          netSalesUnit: 4,
          totalOrders: 4,
          __typename: 'Metrics',
        },
        last7DaysMetrics: {
          netSalesAmount: {
            amount: '32.5',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          grossSalesAmount: {
            amount: '32.5',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          grossSalesUnit: 1,
          grossSalesUnitFromBundle: 0,
          grossSalesAmountFromBundle: {
            amount: '0',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          netSalesUnit: 1,
          totalOrders: 1,
          __typename: 'Metrics',
        },
        last90DaysMetrics: {
          netSalesAmount: {
            amount: '227.5',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          grossSalesAmount: {
            amount: '227.5',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          grossSalesUnit: 7,
          grossSalesUnitFromBundle: 0,
          grossSalesAmountFromBundle: {
            amount: '0',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          netSalesUnit: 7,
          totalOrders: 7,
          __typename: 'Metrics',
        },
        monthToDateMetrics: {
          netSalesAmount: {
            amount: '32.5',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          grossSalesAmount: {
            amount: '32.5',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          grossSalesUnit: 1,
          grossSalesUnitFromBundle: 0,
          grossSalesAmountFromBundle: {
            amount: '0',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          netSalesUnit: 1,
          totalOrders: 1,
          __typename: 'Metrics',
        },
        sinceLifeTimeMetrics: {
          netSalesAmount: {
            amount: '780',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          grossSalesAmount: {
            amount: '780',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          grossSalesUnit: 24,
          grossSalesUnitFromBundle: 0,
          grossSalesAmountFromBundle: {
            amount: '0',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          netSalesUnit: 24,
          totalOrders: 22,
          __typename: 'Metrics',
        },
        yearToDateMetrics: {
          netSalesAmount: {
            amount: '617.5',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          grossSalesAmount: {
            amount: '617.5',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          grossSalesUnit: 19,
          grossSalesUnitFromBundle: 0,
          grossSalesAmountFromBundle: {
            amount: '0',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          netSalesUnit: 19,
          totalOrders: 17,
          __typename: 'Metrics',
        },
        yesterdayMetrics: {
          netSalesAmount: {
            amount: '32.5',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          grossSalesAmount: {
            amount: '32.5',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          grossSalesUnit: 1,
          grossSalesUnitFromBundle: 0,
          grossSalesAmountFromBundle: {
            amount: '0',
            currencyCode: 'USD',
            __typename: 'PriceAmount',
          },
          netSalesUnit: 1,
          totalOrders: 1,
          __typename: 'Metrics',
        },
      });
    }
  });

  console.time('run');
  const data = await Promise.all(obj.promise);
  console.timeEnd('run');

  // console.log('data', data);
})();
