/**
 * Finds two distinct indices in the array such that the numbers at those indices add up to the target.
 *
 * @param {number[]} nums - An array of integers.
 * @param {number} target - The target sum to achieve by adding two distinct numbers from the array.
 * @returns {number[]} - An array containing the two indices of the numbers that add up to the target.
 *                      If no such pair exists, an empty array is returned.
 *
 * @example
 * // Returns [0, 1] because nums[0] + nums[1] = 2 + 7 = 9
 * twoSum([2, 7, 11, 15], 9);
 *
 * @example
 * // Returns [1, 2] because nums[1] + nums[2] = 3 + 3 = 6
 * twoSum([3, 3], 6);
 *
 * @example
 * // Returns [] because no two numbers add up to the target
 * twoSum([1, 2, 3], 7);
 */
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    // Return an empty array if no solution is found
    return [];
};