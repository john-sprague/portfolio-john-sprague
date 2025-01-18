
/**
 * @param {int32} n
 * @param {int32} r
 * @return {int32}
 * 
 * Computes the value of nCr (binomial coefficient), which represents the number 
 * of ways to choose `r` elements from a set of `n` elements.
 * 
 * This implementation uses a dynamic programming approach with space optimization, 
 * leveraging a 2D table to compute nCr iteratively based on the recurrence relation:
 * c(n, r) = c(n-1, r) + c(n-1, r-1)
 * 
 * The recurrence relation is derived from Pascal's Triangle and ensures efficient 
 * computation while avoiding overflow using modulo arithmetic with a large prime P.
 * 
 * **Algorithm Explanation**:
 * - Base Case: If r > n, the result is 0. If r = 0 or r = n, the result is 1.
 * - Dynamic Programming Table: A 2-row table (`dp`) of size (n+1) x (r+1) is used, 
 *   where dp[i % 2][j] stores the value of c(i, j).
 * - Iterative Calculation: Each value of dp[i][j] is calculated using:
 *     dp[i % 2][j] = dp[(i - 1) % 2][j] + dp[(i - 1) % 2][j - 1]
 *   with modulo P to handle large numbers.
 * 
 * **Complexity**:
 * - Time: O(n * r) — Each cell in the table is computed once.
 * - Space: O(r) — The 2-row optimization reduces memory usage to O(r).
 * 
 * @param {number} n - The total number of elements in the set (0 <= n <= 10^6).
 * @param {number} r - The number of elements to choose (0 <= r <= n).
 * @returns {number} - The value of nCr % P, where P = 1000000007.
 * 
 * @example
 * // Example usage:
 * const result = ncr(5, 2);
 * console.log(result); // Output: 10
 */
const P = 1000000007;

function ncr(n, r) {
    if (r > n) {
        return 0;
    }

    // Here dp[n][r] = nCr.
    const dp = Array.from({ length: 2 }, () => Array(r + 1).fill(0));

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= r; j++) {
            if (j <= i) {
                if (i === j || j === 0) {
                    dp[i % 2][j] = 1;
                } else {
                    dp[i % 2][j] = (dp[(i - 1) % 2][j] + dp[(i - 1) % 2][j - 1]) % P;
                }
            }
        }
    }
    return dp[n % 2][r];
}


/** 
* Key Points:
* Base Cases:
* r > n: Impossible to choose r elements from n.
* r = 0 or r = n: Only one way to choose all or none of the elements.
* 
* Space Optimization:
* The algorithm uses dp[i % 2][j] instead of a full 2D table, keeping only the current and previous rows.
* Modulo Arithmetic:

* All calculations use modulo P to prevent integer overflow and adhere to constraints in competitive programming.
 */