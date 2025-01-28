/**
 * Calculates the maximum profit that can be obtained by cutting a rod of a given length
 * into pieces of varying lengths, with prices specified for each length.
 *
 * @param {number[]} price - An array of integers where `price[i]` represents the price of a rod of length `i + 1`.
 * @returns {number} The maximum profit that can be obtained by cutting the rod into pieces.
 *
 * @example
 * // Example usage:
 * const price = [1, 5, 8, 9, 10, 17, 17, 20];
 * console.log(get_maximum_profit(price)); // Output: 22
 *
 * @description
 * This algorithm uses dynamic programming to compute the optimal way to cut a rod of length `n`
 * into smaller pieces to maximize profit. It works as follows:
 * 1. Initialize a DP array `dp` of size `n + 1` with all elements set to 0. Here, `dp[len]` stores the maximum
 *    profit for a rod of length `len`.
 * 2. Iterate through each possible rod length (`len`) from 1 to `n`.
 * 3. For each `len`, iterate through all possible cuts (`cut`) from 1 to `len`.
 * 4. For each `cut`, calculate the profit of cutting the rod at `cut` and combining it with the
 *    previously computed optimal profit for the remaining length (`len - cut`).
 * 5. Update `dp[len]` with the maximum profit for the current length.
 * 6. Return `dp[n]` as the final result, representing the maximum profit for the full rod length.
 *
 * @complexity
 * Time complexity: O(n^2), where `n` is the length of the rod. The outer loop runs `n` times,
 *                  and the inner loop runs up to `n` times for each rod length.
 * Space complexity: O(n), as the DP array `dp` uses O(n) space.
 */
function get_maximum_profit(price) {
    const n = price.length;
    const dp = new Array(n + 1).fill(0);
    
    for (let len = 1; len <= n; len++) { 
        for (let cut = 1; cut <= len; cut++) { 
            // price[cut - 1] ensures we are accessing the price of a rod of length cut correctly since the array indices start from 0, while cut starts from 1.
            dp[len] = Math.max(dp[len], price[cut - 1] + dp[len - cut]);
        }
    }

    return dp[n];
}


console.log(get_maximum_profit([1,5,8,9]))