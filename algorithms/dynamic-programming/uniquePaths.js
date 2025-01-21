/**
 * Calculates the number of unique paths in an `n x m` grid from the top-left corner to the bottom-right corner.
 * Movement is restricted to either right or down at any step.
 *
 * @param {number} n - The number of rows in the grid.
 * @param {number} m - The number of columns in the grid.
 * @return {number} - The total number of unique paths from the top-left to the bottom-right corner of the grid.

 *
 * @description
 * This algorithm uses dynamic programming to solve the problem. It initializes a 2D array `dp` where
 * `dp[row][col]` represents the number of unique paths to cell `(row, col)` from `(0, 0)`. The first
 * row and first column are initialized to `1` because there's only one way to reach those cells (either
 * by moving right or moving down, respectively). The rest of the cells are filled using the recurrence
 * relation:
 * 
 * `dp[row][col] = dp[row - 1][col] + dp[row][col - 1]`
 * 
 * This formula considers the two possible ways to reach a cell: coming from the cell above it or
 * coming from the cell to its left.
 * 
 * The final answer is stored in `dp[n - 1][m - 1]`, representing the bottom-right corner of the grid.
 *
 * @complexity
 * Time complexity: O(n * m) - Nested loops to fill the DP table.
 * Space complexity: O(n * m) - For the DP table storage.
 */

function uniquePaths(n, m) {
    const dp = Array.from({length: n}, () => new Array(m).fill(0))
    
    for (let row = 0; row < n; row++) {
        dp[row][0] = 1; 
    }
    for (let col = 0; col < m; col++) {
        dp[0][col] = 1; 
    }
    
    for (let row = 1; row < n; row++) {
        for(let col = 1; col < m; col++) {
            dp[row][col] = dp[row-1][col] + dp[row][col-1]
        }
    }
    
    return dp[n-1][m-1]
}


/**
 * Calculates the number of unique paths in an `n x m` grid from the top-left to the bottom-right corner.
 * You can only move either down or right at any point in time.
 * 
 * This function optimizes space by using a 2-row dynamic programming approach, reducing the space complexity 
 * from O(n * m) to O(2 * m). It also applies modulo arithmetic to handle large numbers efficiently.
 * 
 * @param {number} n - The number of rows in the grid. (1 ≤ n ≤ 1000)
 * @param {number} m - The number of columns in the grid. (1 ≤ m ≤ 1000)
 * @returns {number} - The total number of unique paths modulo 10^9 + 7.
 * 
 * @example
 * // Example usage:
 * console.log(unique_paths(3, 3)); // Output: 6
 * console.log(unique_paths(1000, 1000)); // Output: (large number modulo 10^9 + 7)
 * 
 * @description
 * The algorithm works as follows:
 * 1. A 2-row grid is used to store the current and previous rows' results.
 * 2. For each cell, if it's in the first row or first column, the value is set to 1 (base case).
 * 3. For other cells, the value is calculated as the sum of the cell directly above and the cell to the left,
 *    modulo \(10^9 + 7\).
 * 4. After iterating through all rows, the result is stored in the last cell of the last processed row.
 * 
 * @complexity
 * Time Complexity: O(n * m) - Two nested loops iterate through the grid.
 * Space Complexity: O(2 * m) ≈ O(m) - Uses two rows to store the current and previous rows' results.
 */

/**
 * @param {int32} n
 * @param {int32} m
 * @return {int32}
 */
function uniquePaths(n, m) {
    const grid = Array.from({length: 2}, () => Array.from({length: m}).fill(0));
    
    for (let row = 0; row < n; row++) {
        for(let col = 0; col < m; col++) {
            if (col === 0 || row === 0) {
                grid[row % 2][col] = 1
            } else {
                grid[row % 2][col] = (grid[(row - 1) % 2][col] + grid[row % 2][col - 1]) % 1000000007
            }
        }
    }

    return grid[(n-1) % 2][m-1]
}

console.log(unique_paths(10,10))