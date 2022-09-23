const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./test.json').toString());

function case1(data) {
  const result = {};
  Object.keys(data).forEach((salesChannelKey) => {
    const salesMetrics = data[salesChannelKey];
    const salesMetricsKeys = Object.keys(salesMetrics);
    salesMetricsKeys.forEach((salesMetricsKey) => {
      const salesChannelItemKey = `${salesMetricsKey}:${salesChannelKey}`; // fake
      result[salesChannelItemKey] = salesMetrics[salesMetricsKey];
    });
  });
  return result;
}

function case2(data) {
  const result = {};
  const salesChannelKeys = Object.keys(data);
  salesChannelKeys.forEach((salesChannelKey) => {
    const salesMetrics = data[salesChannelKey];
    const salesMetricsKeys = Object.keys(salesMetrics);
    salesMetricsKeys.forEach((salesMetricsKey) => {
      const salesChannelItemKey = `${salesMetricsKey}:${salesChannelKey}`; // fake
      result[salesChannelItemKey] = salesMetrics[salesMetricsKey];
    });
  });
  return result;
}

function case3(data) {
  const result = {};
  Object.entries(data).forEach(([salesChannelKey, salesMetrics]) => {
    Object.entries(salesMetrics).forEach(([salesMetricsKey, metrics]) => {
      const salesChannelItemKey = `${salesMetricsKey}:${salesChannelKey}`; // fake
      result[salesChannelItemKey] = metrics;
    });
  });
  return result;
}

console.time('case1');
case1(data);
console.timeEnd('case1');

console.time('case2');
case2(data);
console.timeEnd('case2');

console.time('case3');
case3(data);
console.timeEnd('case3');
