const obj = {
  case1: 'unchanged',
  case2: 'unchanged',
  case3: 'unchanged',
};

function updateObj(f, o) {
  o[f] = 'changed';
  console.log(`is same obj (${f})`, Object.is(o, obj));
  // console.log('obj', obj);
}

updateObj('case1', obj);

(async () => {
  updateObj(
    'case2',
    await new Promise((resolve) => {
      resolve(obj);
    })
  );
})();

// updateObj('case3', obj);

(async () => {
  const newObj = await new Promise((resolve) => {
    resolve(obj);
  });
  updateObj('case3', { ...newObj });
})();

setTimeout(() => {
  console.log('result=', obj);
}, 500);
