function CreateObject(arr) {
  // Write your code here
  let object = {};
  for (let i = 0; i < arr.length; i += 2) {
    let key = arr[i];
    let value = arr[i + 1];
    object[key] = value;
  }
  return object;
}

module.exports = CreateObject;
