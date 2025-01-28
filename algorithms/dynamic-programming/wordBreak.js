function wordBreak(s, wordDict) {
    // Convert wordDict to a Set for faster lookups
    const wordSet = new Set(wordDict);

    // Create a DP array, initialized to false
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true; // Base case: empty string can always be segmented

    // Iterate through the string
    for (let i = 1; i <= s.length; i++) {
        // Check all possible substrings ending at `i`
        for (let j = 0; j < i; j++) {
            // If the substring `s[j:i]` is in the dictionary and `dp[j]` is true
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true; // Mark `i` as reachable
                break; // No need to check further substrings
            }
        }
    }

    return dp[s.length];
}