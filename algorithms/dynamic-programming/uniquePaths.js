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

function unique_paths(n, m) {
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
