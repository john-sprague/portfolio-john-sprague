/**
 * Finds the length of the longest substring without repeating characters.
 *
 * @param {string} s - The input string to analyze.
 * @returns {number} The length of the longest substring without repeating characters.
 *                  Returns `0` if the input string is empty.
 *
 * @example
 * // Example 1:
 * lengthOfLongestSubstring("abcabcbb"); // Returns 3
 * // Explanation: The longest substring without repeating characters is "abc", which has a length of 3.
 *
 * @example
 * // Example 2:
 * lengthOfLongestSubstring("bbbbb"); // Returns 1
 * // Explanation: The longest substring without repeating characters is "b", which has a length of 1.
 *
 * @example
 * // Example 3:
 * lengthOfLongestSubstring("pwwkew"); // Returns 3
 * // Explanation: The longest substring without repeating characters is "wke", which has a length of 3.
 *
 * @example
 * // Example 4:
 * lengthOfLongestSubstring(""); // Returns 0
 * // Explanation: The input string is empty, so the result is 0.
 *
 * @description
 * This function uses a sliding window approach to find the longest substring without repeating characters.
 * It maintains a set of unique characters within the current window and adjusts the window when a duplicate character is encountered.
 * The time complexity is O(n), where n is the length of the input string, and the space complexity is O(min(m, n)), where m is the size of the character set.
 */
function lengthOfLongestSubstring(s) {
    let start = 0; // Start of the sliding window
    let maxLength = 0; // Maximum length of substring without repeating characters
    const set = new Set(); // Set to track unique characters in the current window

    for (let end = 0; end < s.length; end++) {
        let curr = s.charAt(end); // Current character

        // If the current character is already in the set, move the start pointer
        while (set.has(curr)) {
            set.delete(s.charAt(start)); // Remove the character at the start pointer
            start++; // Move the start pointer forward
        }

        // Add the current character to the set
        set.add(curr);

        // Update the maximum length if the current window is larger
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}