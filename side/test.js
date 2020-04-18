let myArray = [1, 2, 3, 4, 5];
let myObject = {
  'first': 1,
  'second': 2,
  'third': 3,
  'forth': 4,
  'fifth': 5
}

console.log(typeof(myArray));
console.log(typeof(myObject));

console.log(myArray.constructor);
console.log(myObject.constructor);


const composeUrl = (key, endpoint, params) => {
  let request = "";
  const composeRequest = (params) => {
    params.forEach((param) => {
      request += `&${param.name}=${param.value}`
    });
  }

  return `${endpoint}?key=${key}${composeRequest(params)}`
}

console.log(typeof(composeUrl));
console.log(typeof('1'));
console.log(typeof(1));
console.log(typeof(a));
console.log(typeof(null));
console.log(typeof(typeof(undefined)));
console.log(typeof(true));
