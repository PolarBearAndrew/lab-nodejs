const obj = {
  a: {},
};

const v = obj.a.value;

obj.a.value = v + 1;

console.log(JSON.stringify(obj, null, 2));
// {
//   "a": {
//     "value": null
//   }
// }

console.log('===============');

const obj2 = {
  a: {},
};

const v2 = obj2.a.value;

obj2.a.value = (v2 || 0) + 1;

console.log(JSON.stringify(obj2, null, 2));
// {
//   "a": {
//     "value": 1
//   }
// }
