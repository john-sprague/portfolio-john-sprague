/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLength = Infinity; // To keep track of the minimum length of the subarray
    let currentSum = 0;       // To store the sum of the current window
    let start = 0;            // Left boundary of the sliding window

    for (let end = 0; end < nums.length; end++) {
        currentSum += nums[end]; // Add the current number to the window's sum

        // Shrink the window from the left as long as the sum >= target
        while (currentSum >= target) {
            minLength = Math.min(minLength, end - start + 1); // Update the minimum length
            currentSum -= nums[start]; // Remove the leftmost element from the sum
            start++;                   // Move the left boundary to the right
        }
    }

    // If no subarray satisfies the condition, return 0
    return minLength === Infinity ? 0 : minLength;
};

// Example Usage
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2
console.log(minSubArrayLen(4, [1, 4, 4]));          // Output: 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1]));// Output: 0
