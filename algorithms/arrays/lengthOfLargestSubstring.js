/**
 * Finds the length of the longest substring without repeating characters.
 *
 * @param {string} s - The input string to analyze.
 * @return {number} - The length of the longest substring without repeating characters.
 *
 * @example
 * lengthOfLongestSubstring("abcabcbb"); // 3 ("abc")
 * lengthOfLongestSubstring("bbbbb");    // 1 ("b")
 * lengthOfLongestSubstring("pwwkew");   // 3 ("wke")
 *
 * @description
 * This function uses a sliding window approach with a Set to track unique characters.
 * - It iterates through the string, expanding the window when characters are unique.
 * - When a repeating character is found, it shrinks the window from the left until the repeating character is removed.
 * - The maximum length of the window is tracked and returned.
 *
 * Constraints:
 * - 0 <= s.length <= 5 * 10^4
 * - The string `s` consists of English letters, digits, symbols, and spaces.
 *
 * Edge Cases:
 * - Empty string: Returns 0.
 * - All unique characters: Returns the length of the string.
 * - All repeating characters: Returns 1.
 * - Spaces and special characters: Treated as unique characters.
 * - Case sensitivity: "a" and "A" are treated as distinct characters.
 *
 * Time Complexity:
 * - Best Case: O(n) (no repeating characters).
 * - Worst Case: O(n^2) (all repeating characters, e.g., "aaaaa").
 *
 * Space Complexity:
 * - O(min(m, n)), where `m` is the size of the character set and `n` is the length of the string.
 *   - For lowercase English letters, `m = 26`.
 *   - For Unicode characters, `m` can be much larger.
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0; // Tracks the maximum length of the substring
    if (s.length === 0) return max; // Handle empty string case

    const set = new Set(); // Tracks unique characters in the current window
    let start = 0; // Start index of the sliding window

    for (let end = 0; end < s.length; end++) {
        let endLetter = s[end]; // Current character

        // If the character is already in the set, shrink the window from the left
        if (set.has(endLetter)) {
            while (set.has(endLetter)) {
                set.delete(s[start]); // Remove the leftmost character
                start++; // Move the window's start to the right
            }
        }

        // Add the current character to the set
        set.add(s[end]);

        // Update the maximum length of the window
        max = max > set.size ? max : set.size;
    }

    return max; // Return the length of the longest substring
};