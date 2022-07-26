const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// about 5 seconds
const simulateHeavyCPU = async (msgPrefix = '') => {
  console.time(`${msgPrefix}-heavy-cpu`);
  for (let times = 0; times < 10000; times++) {
    let a = 0;
    for (let i = 0; i < 1000000; i++) {
      a += 1;
    }
  }
  console.timeEnd(`${msgPrefix}-heavy-cpu`);
};

module.exports = {
  delay,
  simulateHeavyCPU,
};
