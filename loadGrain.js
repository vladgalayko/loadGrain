function loadGrain(levels) {
    let rightMaxValue = 0,
        leftMaxValue = 0,
        right = levels.length - 1,
        left = 0,
        result = 0;

    while (left < right) {
        if (levels[left] > leftMaxValue) {
            leftMaxValue = levels[left];
        }
        if (levels[right] > rightMaxValue) {
            rightMaxValue = levels[right];
        }
        if (leftMaxValue >= rightMaxValue) {
            result += rightMaxValue - levels[right];
            right--;
        } else {
            result += leftMaxValue - levels[left];
            left++;
        }
    }
    return result;
}

console.log(loadGrain([15, 0, 6, 10, 11, 2, 5]))//20
console.log(loadGrain([4, 1, 3]))// 2
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10]))// 7
console.log(loadGrain([2, 0, 1, 5, 2, 7])) // 6
console.log(loadGrain([2, 4, 2])) // 0
console.log(loadGrain([7, 4])) // 0
console.log(loadGrain([])) // 0