/**
 * Calculates the minimum number of coins needed to make up a given value.
 * If it's not possible to make the value using the given coins, the function returns -1.
 * 
 * @param {number[]} coins - An array of distinct integers representing the denominations of coins available.
 * @param {number} value - The target value to be achieved using the minimum number of coins.
 * @returns {number} - The minimum number of coins required to make up the value, or -1 if it's not possible.
 * 
 * @example
 * // Example usage:
 * console.log(minimum_coins([1, 2, 5], 11)); // Output: 3 (5 + 5 + 1)
 * console.log(minimum_coins([2], 3));        // Output: -1 (no combination possible)
 * console.log(minimum_coins([1, 2, 3], 7)); // Output: 3 (3 + 3 + 1)
 * 
 * @description
 * The algorithm uses a dynamic programming approach to calculate the minimum number of coins required for each 
 * value from 1 to the target `value`. The `table` array is used to store the minimum coins required for each 
 * sub-value. The algorithm iterates over all coin denominations and updates the table based on the smallest 
 * number of coins needed for the current value minus the current coin denomination.
 * 
 * - **Base Case:** `table[0] = 0` since 0 coins are needed to make a value of 0.
 * - **Transition Relation:** `table[amt] = Math.min(table[amt - coin] + 1, table[amt])` for all `coin` values.
 * 
 * @complexity
 * Time Complexity: O(value * coins.length)  
 * - Outer loop runs from 1 to `value` (O(value)).  
 * - Inner loop runs over all `coins` (O(coins.length)).  
 * 
 * Space Complexity: O(value)  
 * - The `table` array of size `value + 1` is used to store intermediate results.
 */


function coinChange(coins, value) {
    const table = Array.from({length: value + 1}).fill(Infinity);
    
    table[0] = 0; // Base case: 0 coins needed to make value 0

    for (let amt = 1; amt <= value; amt++){
        let minValue = Infinity;
        for (let coin = 0; coin < coins.length; coin++){
            let currCoin = coins[coin];
            if (amt - currCoin >= 0) {
                minValue = Math.min(table[amt-currCoin], minValue);
            }
        }
        table[amt] = minValue + 1; // incorporate the coin you're currently considering into the solution
    }

    return table[value] === Infinity ? -1 : table[value]; // Return -1 if no combination exists
}
