const repeatNumbers = function(data) {
  let result = "";
  for (let arr of data) {
    for(let x = 0; x < arr[1]; x++) {
      result +=arr[0].toString();  
    }
    if (data.length > 1 && arr != data[data.length - 1]) {
      result += ", ";
    }
  }
  return result
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));