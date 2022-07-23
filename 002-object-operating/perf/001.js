const len = 1000000;

function randStr(len) {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(0, len);
}

// origin_use_case: 592.171ms
// simulate using date string YYYY-MM-DD as key
function origin_use_case() {
  const keys = [];
  const object = {};

  for (let i = 0; i < len; ++i) {
    keys.push(randStr(10));
  }

  console.time('origin_use_case');

  for (let i = 0; i < len; ++i) {
    object[keys[i]] = 1;
  }

  for (let i = 0; i < len; ++i) {
    object[keys[i]] = object[keys[i]] + 1;
  }
  console.timeEnd('origin_use_case');
}

// better_practice: 29.859ms
// we found out using array index as key performance is much better
function better_practice() {
  const keys = [];
  const object = {};

  for (let i = 0; i < len; ++i) {
    keys.push(i);
    keys.push(i.toString());
  }

  console.time('better_practice');

  for (let i = 0; i < len; ++i) {
    object[keys[i]] = 1;
  }

  for (let i = 0; i < len; ++i) {
    object[keys[i]] = object[keys[i]] + 1;
  }
  console.timeEnd('better_practice');
}

// better_practice_but_not_working_case: 1.029s
// when number of index have huge gap, then perf will drop back to the original one
function better_practice_but_not_working_case() {
  const keys = [];
  const object = {};

  for (let i = 0; i < len; ++i) {
    keys.push((i * 10).toString());
  }

  console.time('better_practice_but_not_working_case');

  for (let i = 0; i < len; ++i) {
    object[keys[i]] = 1;
  }

  for (let i = 0; i < len; ++i) {
    object[keys[i]] = object[keys[i]] + 1;
  }
  console.timeEnd('better_practice_but_not_working_case');
}

// other_case: 585.931ms
// if add a prefix, than the index won't work anymore
function other_case() {
  const keys = [];
  const object = {};

  for (let i = 0; i < len; ++i) {
    keys.push(`i${i}`);
  }

  console.time('other_case');

  for (let i = 0; i < len; ++i) {
    object[keys[i]] = 1;
  }

  for (let i = 0; i < len; ++i) {
    object[keys[i]] = object[keys[i]] + 1;
  }
  console.timeEnd('other_case');
}

console.log('\nfor-loop times:', len);

origin_use_case();
better_practice();
better_practice_but_not_working_case();
other_case();

// output:
// for-loop times: 1000000
// origin_use_case: 620.368ms
// better_practice: 30.528ms
// better_practice_but_not_working_case: 995.774ms
// other_case: 562.406ms
