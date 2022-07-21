const len = 1000000;

function randStr(len) {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(0, len);
}

function case1() {
  const keys = [];
  const object = {};

  for (let i = 0; i < len; ++i) {
    keys.push(randStr(10));
  }

  console.time('case1');

  for (let i = 0; i < len; ++i) {
    object[keys[i]] = 1;
  }

  for (let i = 0; i < len; ++i) {
    object[keys[i]] = object[keys[i]] + 1;
  }
  console.timeEnd('case1');
}

function case2() {
  const keys = [];
  const object = {};

  for (let i = 0; i < len; ++i) {
    keys.push(i);
    keys.push(i.toString());
  }

  console.time('case2');

  for (let i = 0; i < len; ++i) {
    object[keys[i]] = 1;
  }

  for (let i = 0; i < len; ++i) {
    object[keys[i]] = object[keys[i]] + 1;
  }
  console.timeEnd('case2');
}

function case3() {
  const keys = [];
  const object = {};

  for (let i = 0; i < len; ++i) {
    keys.push(`i${i}`);
  }

  console.time('case3');

  for (let i = 0; i < len; ++i) {
    object[keys[i]] = 1;
  }

  for (let i = 0; i < len; ++i) {
    object[keys[i]] = object[keys[i]] + 1;
  }
  console.timeEnd('case3');
}

function case4() {
  const keys = [];
  const object = {};

  for (let i = 0; i < len; ++i) {
    keys.push((i * 10).toString());
  }

  console.time('case4');

  for (let i = 0; i < len; ++i) {
    object[keys[i]] = 1;
  }

  for (let i = 0; i < len; ++i) {
    object[keys[i]] = object[keys[i]] + 1;
  }
  console.timeEnd('case4');
}

console.log('\nfor-loop times:', len);

case1();
case2();
case3();
case4();
