exports.min = function min (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        return Math.min(...array)};
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
  return Math.max(...array);
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let sum = 0;
        for (index in array) sum +=array[index];
        return sum/array.length;
    }
}

