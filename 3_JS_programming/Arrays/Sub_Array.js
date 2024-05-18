//Given an array of integers and an integer k, find the number of contiguous subarrays that sum to k.

function subarraySum(nums, k) {
    let count = 0;
    let sum = 0;
    const sumMap = new Map();
    sumMap.set(0, 1);

    for (let num of nums) {
        sum += num;
        if (sumMap.has(sum - k)) {
            count += sumMap.get(sum - k);
        }
        sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
    }
    return count;
}

// Test Cases:
console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2
